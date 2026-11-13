import { NgComponentOutlet } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { ButtonTextComponent, TextFieldFormComponent } from '@org/ngblock';
import {
  ComponentReference,
  parseComponentReference,
} from './component-reference';
import {
  getComponentPreview,
  PreviewVariant,
} from './component-preview.registry';

@Component({
  imports: [ButtonTextComponent, NgComponentOutlet, TextFieldFormComponent],
  selector: 'ngb-docs-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  readonly catalog = signal<readonly ComponentReference[]>([]);
  readonly search = signal('');
  readonly selectedCategory = signal('All');
  readonly activeSelector = signal<string | null>(null);
  readonly previewVariant = signal<PreviewVariant>('smart');
  readonly isLoading = signal(true);
  readonly loadError = signal('');
  readonly categories = computed(() => [
    'All',
    ...new Set(this.catalog().map((component) => component.category)),
  ]);
  readonly filteredComponents = computed(() => {
    const query = this.search().trim().toLowerCase();
    const category = this.selectedCategory();

    return this.catalog().filter((component) => {
      const matchesCategory =
        category === 'All' || component.category === category;
      const matchesQuery =
        query.length === 0 ||
        `${component.name} ${component.dumbSelector} ${component.smartSelector} ${component.description} ${component.inputsAndEvents}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesQuery;
    });
  });
  readonly activeComponent = computed(() => {
    const components = this.filteredComponents();

    return (
      components.find(
        (component) => component.selector === this.activeSelector(),
      ) ??
      components[0] ??
      null
    );
  });
  readonly activePreview = computed(() => {
    const component = this.activeComponent();
    return component
      ? getComponentPreview(component.smartSelector, this.previewVariant())
      : null;
  });
  readonly previewContent = computed<Node[][]>(() => {
    const preview = this.activePreview();
    return preview ? [[document.createTextNode(preview.content)]] : [];
  });

  readonly sampleName = signal('Jordan Lee');
  readonly saveCount = signal(0);
  readonly usageExample = `import { Component, signal } from '@angular/core';
import { ButtonTextComponent, TextFieldFormComponent } from 'ngblock';

@Component({
  imports: [ButtonTextComponent, TextFieldFormComponent],
  template: \`
    <ngb-text-field-form
      label="Name"
      [value]="name()"
      (changed)="name.set($event)"
    />
    <ngb-button-text-control (clicked)="save()">Save</ngb-button-text-control>
  \`,
})
export class ProfileComponent {
  readonly name = signal('');

  save(): void {}
}`;

  ngOnInit(): void {
    void this.loadCatalog();
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  selectComponent(selector: string): void {
    this.activeSelector.set(selector);
  }

  countCategory(category: string): number {
    return category === 'All'
      ? this.catalog().length
      : this.catalog().filter((item) => item.category === category).length;
  }

  selectorMarkup(selector: string): string {
    return `<${selector} />`;
  }

  selectPreviewVariant(variant: PreviewVariant): void {
    this.previewVariant.set(variant);
  }

  saveProfile(): void {
    this.saveCount.update((count) => count + 1);
  }

  private async loadCatalog(): Promise<void> {
    try {
      const response = await fetch(
        new URL('assets/README.md', document.baseURI),
      );
      if (!response.ok) {
        throw new Error(
          `Reference request failed with status ${response.status}`,
        );
      }

      const components = parseComponentReference(await response.text());
      this.catalog.set(components);
      this.activeSelector.set(components[0].selector);
    } catch (error) {
      console.error('Unable to load the ngblock component reference.', error);
      this.loadError.set(
        'The component reference could not be loaded. Rebuild the docs app and try again.',
      );
    } finally {
      this.isLoading.set(false);
    }
  }
}
