import { Component, signal } from '@angular/core';
import {
  AccordionMenuComponent,
  AlertMessageComponent,
  AutocompleteFormComponent,
  AvatarDataComponent,
  BadgeMessageComponent,
  BreadcrumbMenuComponent,
  ButtonGroupComponent,
  ButtonIconComponent,
  ButtonTextComponent,
  CarouselDataComponent,
  CardLayoutComponent,
  CheckboxComponent,
  ChipMessageComponent,
  ColorPickerFormComponent,
  ConfirmDialogOverlayComponent,
  ContainerLayoutComponent,
  DatePickerFormComponent,
  DialogOverlayComponent,
  DividerLayoutComponent,
  DrawerOverlayComponent,
  DropdownMenuComponent,
  EmptyStateDataComponent,
  FileUploadFormComponent,
  IconComponent,
  ImageDataComponent,
  ListboxFormComponent,
  LinkComponent,
  ListDataComponent,
  MenubarMenuComponent,
  MultiSelectFormComponent,
  NumberFormComponent,
  PaginatorDataComponent,
  PasswordFormComponent,
  PanelLayoutComponent,
  PopoverOverlayComponent,
  ProgressMessageComponent,
  RatingFormComponent,
  RadioGroupFormComponent,
  SelectFormComponent,
  SkeletonMessageComponent,
  SliderFormComponent,
  SplitButtonComponent,
  SpinnerMessageComponent,
  StepsMenuComponent,
  StackLayoutComponent,
  SwitchFormComponent,
  TableDataComponent,
  TabsMenuComponent,
  TextareaFormComponent,
  TextFieldFormComponent,
  TimelineDataComponent,
  ToastMessageComponent,
  ToggleButtonComponent,
  ToolbarLayoutComponent,
  TooltipOverlayComponent,
  TreeDataComponent,
  type DataColumn,
  type DataRow,
} from '@org/ngblock';

@Component({
  imports: [
    AccordionMenuComponent,
    AlertMessageComponent,
    AutocompleteFormComponent,
    AvatarDataComponent,
    BadgeMessageComponent,
    BreadcrumbMenuComponent,
    ButtonGroupComponent,
    ButtonIconComponent,
    ButtonTextComponent,
    CarouselDataComponent,
    CardLayoutComponent,
    CheckboxComponent,
    ChipMessageComponent,
    ColorPickerFormComponent,
    ConfirmDialogOverlayComponent,
    ContainerLayoutComponent,
    DatePickerFormComponent,
    DialogOverlayComponent,
    DividerLayoutComponent,
    DrawerOverlayComponent,
    DropdownMenuComponent,
    EmptyStateDataComponent,
    FileUploadFormComponent,
    IconComponent,
    ImageDataComponent,
    ListboxFormComponent,
    LinkComponent,
    ListDataComponent,
    MenubarMenuComponent,
    MultiSelectFormComponent,
    NumberFormComponent,
    PaginatorDataComponent,
    PasswordFormComponent,
    PanelLayoutComponent,
    PopoverOverlayComponent,
    ProgressMessageComponent,
    RatingFormComponent,
    RadioGroupFormComponent,
    SelectFormComponent,
    SkeletonMessageComponent,
    SliderFormComponent,
    SplitButtonComponent,
    SpinnerMessageComponent,
    StepsMenuComponent,
    StackLayoutComponent,
    SwitchFormComponent,
    TableDataComponent,
    TabsMenuComponent,
    TextareaFormComponent,
    TextFieldFormComponent,
    TimelineDataComponent,
    ToastMessageComponent,
    ToggleButtonComponent,
    ToolbarLayoutComponent,
    TooltipOverlayComponent,
    TreeDataComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly name = signal('Jordan Lee');
  readonly theme = signal<'default' | 'ocean'>('default');
  readonly email = signal('jordan@example.com');
  readonly description = signal('');
  readonly notifications = signal(true);
  readonly accepted = signal(false);
  readonly favorite = signal(false);
  readonly plan = signal('starter');
  readonly country = signal('ca');
  readonly seats = signal<number | null>(8);
  readonly startDate = signal('2026-11-07');
  readonly skills = signal<readonly string[]>(['angular']);
  readonly rating = signal(4);
  readonly volume = signal(65);
  readonly password = signal('');
  readonly uploadMessage = signal('');
  readonly framework = signal('');
  readonly accentColor = signal('#3b82f6');
  readonly workspace = signal('design');
  readonly dialogOpen = signal(false);
  readonly drawerOpen = signal(false);
  readonly confirmOpen = signal(false);
  readonly toastVisible = signal(false);
  readonly selectedTab = signal('overview');
  readonly progress = signal(68);
  readonly columns: readonly DataColumn[] = [
    { key: 'name', header: 'Name' },
    { key: 'role', header: 'Role' },
    { key: 'projects', header: 'Projects' },
  ];
  readonly rows: readonly DataRow[] = [
    { name: 'Jordan Lee', role: 'Designer', projects: 6 },
    { name: 'Casey Kim', role: 'Engineer', projects: 9 },
    { name: 'Riley Chen', role: 'Product', projects: 4 },
  ];
  readonly memberPage = signal(0);
  readonly onboardingStep = signal(1);

  toggleTheme(): void {
    this.theme.update((theme) => (theme === 'default' ? 'ocean' : 'default'));
  }

  onFilesSelected(files: readonly File[]): void {
    this.uploadMessage.set(
      files.length === 0
        ? 'No files selected'
        : `${files.length} file${files.length === 1 ? '' : 's'} selected`,
    );
  }

  save(): void {
    this.progress.update((value) => Math.min(value + 10, 100));
  }
}
