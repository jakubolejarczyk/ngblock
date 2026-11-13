import type { Type } from '@angular/core';
import * as Ngblock from '@org/ngblock';

export type PreviewVariant = 'dumb' | 'smart';

export interface ComponentPreview {
  readonly component: Type<unknown>;
  readonly inputs: Readonly<Record<string, unknown>>;
  readonly content: string;
}

interface ComponentPreviewPair {
  readonly content: string;
  readonly dumb: Omit<ComponentPreview, 'content'>;
  readonly smart: Omit<ComponentPreview, 'content'>;
}

const componentPreviews: Record<string, ComponentPreviewPair> = {
  'ngb-button-group-control-smart': {
    content: 'Text formatting',
    dumb: {
      component: Ngblock.ButtonGroupComponent,
      inputs: { label: 'Text formatting' },
    },
    smart: {
      component: Ngblock.ButtonGroupSmartComponent,
      inputs: { label: 'Text formatting' },
    },
  },
  'ngb-button-base-control-smart': {
    content: 'Preview Button Base Control',
    dumb: {
      component: Ngblock.ButtonBaseComponent,
      inputs: { type: 'button', disabled: false, ariaLabel: 'Save changes' },
    },
    smart: {
      component: Ngblock.ButtonBaseSmartComponent,
      inputs: { type: 'button', disabled: false, ariaLabel: 'Save changes' },
    },
  },
  'ngb-button-icon-control-smart': {
    content: 'Preview Button Icon Control',
    dumb: {
      component: Ngblock.ButtonIconComponent,
      inputs: {
        icon: 'favorite',
        ariaLabel: 'Add to favorites',
        type: 'button',
        disabled: false,
      },
    },
    smart: {
      component: Ngblock.ButtonIconSmartComponent,
      inputs: {
        icon: 'favorite',
        ariaLabel: 'Add to favorites',
        type: 'button',
        disabled: false,
      },
    },
  },
  'ngb-button-text-control-smart': {
    content: 'Button',
    dumb: {
      component: Ngblock.ButtonTextComponent,
      inputs: { type: 'button', disabled: false },
    },
    smart: {
      component: Ngblock.ButtonTextSmartComponent,
      inputs: { type: 'button', disabled: false },
    },
  },
  'ngb-checkbox-control-smart': {
    content: 'Accept terms',
    dumb: {
      component: Ngblock.CheckboxComponent,
      inputs: { checked: false, disabled: false },
    },
    smart: {
      component: Ngblock.CheckboxSmartComponent,
      inputs: { checked: false, disabled: false },
    },
  },
  'ngb-link-control-smart': {
    content: 'Angular documentation',
    dumb: {
      component: Ngblock.LinkComponent,
      inputs: { href: 'https://angular.dev', external: true },
    },
    smart: {
      component: Ngblock.LinkSmartComponent,
      inputs: { href: 'https://angular.dev', external: true },
    },
  },
  'ngb-speed-dial-control-smart': {
    content: 'Preview Speed Dial Control',
    dumb: {
      component: Ngblock.SpeedDialComponent,
      inputs: {
        actions: [
          { label: 'Create project', value: 'create' },
          { label: 'Invite member', value: 'invite' },
        ],
      },
    },
    smart: {
      component: Ngblock.SpeedDialSmartComponent,
      inputs: {
        actions: [
          { label: 'Create project', value: 'create' },
          { label: 'Invite member', value: 'invite' },
        ],
      },
    },
  },
  'ngb-split-button-control-smart': {
    content: 'Save',
    dumb: {
      component: Ngblock.SplitButtonComponent,
      inputs: {
        label: 'Save',
        options: [
          { label: 'Save as draft', value: 'draft' },
          { label: 'Save and close', value: 'close' },
        ],
      },
    },
    smart: {
      component: Ngblock.SplitButtonSmartComponent,
      inputs: {
        label: 'Save',
        options: [
          { label: 'Save as draft', value: 'draft' },
          { label: 'Save and close', value: 'close' },
        ],
      },
    },
  },
  'ngb-toggle-button-control-smart': {
    content: 'Favorite',
    dumb: {
      component: Ngblock.ToggleButtonComponent,
      inputs: { pressed: false, disabled: false },
    },
    smart: {
      component: Ngblock.ToggleButtonSmartComponent,
      inputs: { pressed: false, disabled: false },
    },
  },
  'ngb-avatar-data-smart': {
    content: 'Preview Avatar Data',
    dumb: {
      component: Ngblock.AvatarDataComponent,
      inputs: { name: 'Alex Morgan', src: '' },
    },
    smart: {
      component: Ngblock.AvatarDataSmartComponent,
      inputs: { name: 'Alex Morgan', src: '' },
    },
  },
  'ngb-carousel-data-smart': {
    content: 'Preview Carousel Data',
    dumb: {
      component: Ngblock.CarouselDataComponent,
      inputs: {
        slides: [
          {
            title: 'Design systems',
            description: 'Build consistent interfaces.',
          },
          {
            title: 'Accessible UI',
            description: 'Make products work for everyone.',
          },
          {
            title: 'Angular components',
            description: 'Compose reusable building blocks.',
          },
        ],
      },
    },
    smart: {
      component: Ngblock.CarouselDataSmartComponent,
      inputs: {
        slides: [
          {
            title: 'Design systems',
            description: 'Build consistent interfaces.',
          },
          {
            title: 'Accessible UI',
            description: 'Make products work for everyone.',
          },
          {
            title: 'Angular components',
            description: 'Compose reusable building blocks.',
          },
        ],
      },
    },
  },
  'ngb-data-view-smart': {
    content: 'Preview Data View',
    dumb: {
      component: Ngblock.DataViewDataComponent,
      inputs: {
        items: [
          {
            id: 'design',
            title: 'Design system',
            description: 'Shared UI foundations.',
          },
          {
            id: 'accessibility',
            title: 'Accessibility',
            description: 'Inclusive patterns.',
          },
        ],
      },
    },
    smart: {
      component: Ngblock.DataViewDataSmartComponent,
      inputs: {
        items: [
          {
            id: 'design',
            title: 'Design system',
            description: 'Shared UI foundations.',
          },
          {
            id: 'accessibility',
            title: 'Accessibility',
            description: 'Inclusive patterns.',
          },
        ],
      },
    },
  },
  'ngb-empty-state-data-smart': {
    content: 'Create a project to see it listed here.',
    dumb: {
      component: Ngblock.EmptyStateDataComponent,
      inputs: {
        title: 'No projects yet',
        description: 'Create a project to see it listed here.',
      },
    },
    smart: {
      component: Ngblock.EmptyStateDataSmartComponent,
      inputs: {
        title: 'No projects yet',
        description: 'Create a project to see it listed here.',
      },
    },
  },
  'ngb-image-data-smart': {
    content: 'Preview Image Data',
    dumb: {
      component: Ngblock.ImageDataComponent,
      inputs: {
        src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900',
        alt: 'Sunrise over a mountain valley',
        caption: 'A new day in the mountains.',
      },
    },
    smart: {
      component: Ngblock.ImageDataSmartComponent,
      inputs: {
        src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900',
        alt: 'Sunrise over a mountain valley',
        caption: 'A new day in the mountains.',
      },
    },
  },
  'ngb-list-data-smart': {
    content: 'Preview List Data',
    dumb: {
      component: Ngblock.ListDataComponent,
      inputs: {
        ordered: false,
        items: ['Design system', 'Accessibility', 'Documentation'],
      },
    },
    smart: {
      component: Ngblock.ListDataSmartComponent,
      inputs: {
        ordered: false,
        items: ['Design system', 'Accessibility', 'Documentation'],
      },
    },
  },
  'ngb-order-list-data-smart': {
    content: 'Preview Order List Data',
    dumb: {
      component: Ngblock.OrderListDataComponent,
      inputs: { items: ['Planning', 'Design', 'Development'] },
    },
    smart: {
      component: Ngblock.OrderListDataSmartComponent,
      inputs: { items: ['Planning', 'Design', 'Development'] },
    },
  },
  'ngb-paginator-data-smart': {
    content: 'Preview Paginator Data',
    dumb: {
      component: Ngblock.PaginatorDataComponent,
      inputs: { total: 45, pageSize: 10, page: 0 },
    },
    smart: {
      component: Ngblock.PaginatorDataSmartComponent,
      inputs: { total: 45, pageSize: 10, page: 0 },
    },
  },
  'ngb-pick-list-data-smart': {
    content: 'Preview Pick List Data',
    dumb: {
      component: Ngblock.PickListDataComponent,
      inputs: {
        source: ['Design', 'Engineering', 'Research'],
        target: ['Product'],
      },
    },
    smart: {
      component: Ngblock.PickListDataSmartComponent,
      inputs: {
        source: ['Design', 'Engineering', 'Research'],
        target: ['Product'],
      },
    },
  },
  'ngb-table-data-smart': {
    content: 'Preview Table Data',
    dumb: {
      component: Ngblock.TableDataComponent,
      inputs: {
        caption: 'Team members',
        columns: [
          { key: 'name', header: 'Name' },
          { key: 'role', header: 'Role' },
          { key: 'projects', header: 'Projects' },
        ],
        rows: [
          { name: 'Avery', role: 'Designer', projects: 4 },
          { name: 'Jordan', role: 'Engineer', projects: 7 },
        ],
      },
    },
    smart: {
      component: Ngblock.TableDataSmartComponent,
      inputs: {
        caption: 'Team members',
        columns: [
          { key: 'name', header: 'Name' },
          { key: 'role', header: 'Role' },
          { key: 'projects', header: 'Projects' },
        ],
        rows: [
          { name: 'Avery', role: 'Designer', projects: 4 },
          { name: 'Jordan', role: 'Engineer', projects: 7 },
        ],
      },
    },
  },
  'ngb-timeline-data-smart': {
    content: 'Preview Timeline Data',
    dumb: {
      component: Ngblock.TimelineDataComponent,
      inputs: {
        events: [
          {
            title: 'Project created',
            description: 'The workspace was created.',
            date: 'Today',
          },
          {
            title: 'Design approved',
            description: 'The team approved the first design.',
            date: 'Yesterday',
          },
          {
            title: 'Team invited',
            description: 'Three members joined the project.',
            date: 'Last week',
          },
        ],
      },
    },
    smart: {
      component: Ngblock.TimelineDataSmartComponent,
      inputs: {
        events: [
          {
            title: 'Project created',
            description: 'The workspace was created.',
            date: 'Today',
          },
          {
            title: 'Design approved',
            description: 'The team approved the first design.',
            date: 'Yesterday',
          },
          {
            title: 'Team invited',
            description: 'Three members joined the project.',
            date: 'Last week',
          },
        ],
      },
    },
  },
  'ngb-tree-data-smart': {
    content: 'Preview Tree Data',
    dumb: {
      component: Ngblock.TreeDataComponent,
      inputs: {
        nodes: [
          {
            label: 'Applications',
            children: [{ label: 'Dashboard' }, { label: 'Settings' }],
          },
          {
            label: 'Design system',
            children: [{ label: 'Components' }, { label: 'Tokens' }],
          },
          { label: 'Documentation' },
        ],
      },
    },
    smart: {
      component: Ngblock.TreeDataSmartComponent,
      inputs: {
        nodes: [
          {
            label: 'Applications',
            children: [{ label: 'Dashboard' }, { label: 'Settings' }],
          },
          {
            label: 'Design system',
            children: [{ label: 'Components' }, { label: 'Tokens' }],
          },
          { label: 'Documentation' },
        ],
      },
    },
  },
  'ngb-virtual-scroller-data-smart': {
    content: 'Preview Virtual Scroller Data',
    dumb: {
      component: Ngblock.VirtualScrollerDataComponent,
      inputs: {
        items: [
          'Result 1',
          'Result 2',
          'Result 3',
          'Result 4',
          'Result 5',
          'Result 6',
          'Result 7',
          'Result 8',
          'Result 9',
          'Result 10',
          'Result 11',
          'Result 12',
          'Result 13',
          'Result 14',
          'Result 15',
          'Result 16',
          'Result 17',
          'Result 18',
          'Result 19',
          'Result 20',
          'Result 21',
          'Result 22',
          'Result 23',
          'Result 24',
        ],
      },
    },
    smart: {
      component: Ngblock.VirtualScrollerDataSmartComponent,
      inputs: {
        items: [
          'Result 1',
          'Result 2',
          'Result 3',
          'Result 4',
          'Result 5',
          'Result 6',
          'Result 7',
          'Result 8',
          'Result 9',
          'Result 10',
          'Result 11',
          'Result 12',
          'Result 13',
          'Result 14',
          'Result 15',
          'Result 16',
          'Result 17',
          'Result 18',
          'Result 19',
          'Result 20',
          'Result 21',
          'Result 22',
          'Result 23',
          'Result 24',
        ],
      },
    },
  },
  'ngb-autocomplete-form-smart': {
    content: 'Framework',
    dumb: {
      component: Ngblock.AutocompleteFormComponent,
      inputs: {
        label: 'Framework',
        value: '',
        placeholder: 'Start typing',
        options: ['Angular', 'React', 'Svelte', 'Vue'],
      },
    },
    smart: {
      component: Ngblock.AutocompleteFormSmartComponent,
      inputs: {
        label: 'Framework',
        value: '',
        placeholder: 'Start typing',
        options: ['Angular', 'React', 'Svelte', 'Vue'],
      },
    },
  },
  'ngb-color-picker-form-smart': {
    content: 'Accent color',
    dumb: {
      component: Ngblock.ColorPickerFormComponent,
      inputs: { label: 'Accent color', value: '#3b82f6' },
    },
    smart: {
      component: Ngblock.ColorPickerFormSmartComponent,
      inputs: { label: 'Accent color', value: '#3b82f6' },
    },
  },
  'ngb-date-picker-form-smart': {
    content: 'Start date',
    dumb: {
      component: Ngblock.DatePickerFormComponent,
      inputs: { label: 'Start date', value: '2026-11-07', min: '', max: '' },
    },
    smart: {
      component: Ngblock.DatePickerFormSmartComponent,
      inputs: { label: 'Start date', value: '2026-11-07', min: '', max: '' },
    },
  },
  'ngb-date-range-picker-form-smart': {
    content: 'Travel dates',
    dumb: {
      component: Ngblock.DateRangePickerFormComponent,
      inputs: { label: 'Travel dates', min: '2026-01-01' },
    },
    smart: {
      component: Ngblock.DateRangePickerFormSmartComponent,
      inputs: { label: 'Travel dates', min: '2026-01-01' },
    },
  },
  'ngb-file-upload-form-smart': {
    content: 'Attachments',
    dumb: {
      component: Ngblock.FileUploadFormComponent,
      inputs: { label: 'Attachments', accept: 'image/*,.pdf', multiple: true },
    },
    smart: {
      component: Ngblock.FileUploadFormSmartComponent,
      inputs: { label: 'Attachments', accept: 'image/*,.pdf', multiple: true },
    },
  },
  'ngb-form-field-form-smart': {
    content: 'Email',
    dumb: {
      component: Ngblock.FormFieldFormComponent,
      inputs: {
        label: 'Email',
        controlId: 'email',
        hint: 'Use your work address',
      },
    },
    smart: {
      component: Ngblock.FormFieldFormSmartComponent,
      inputs: {
        label: 'Email',
        controlId: 'email',
        hint: 'Use your work address',
      },
    },
  },
  'ngb-listbox-form-smart': {
    content: 'Choose a workspace',
    dumb: {
      component: Ngblock.ListboxFormComponent,
      inputs: {
        label: 'Choose a workspace',
        value: 'design',
        options: [
          { label: 'Design', value: 'design' },
          { label: 'Engineering', value: 'engineering' },
          { label: 'Research', value: 'research' },
        ],
      },
    },
    smart: {
      component: Ngblock.ListboxFormSmartComponent,
      inputs: {
        label: 'Choose a workspace',
        value: 'design',
        options: [
          { label: 'Design', value: 'design' },
          { label: 'Engineering', value: 'engineering' },
          { label: 'Research', value: 'research' },
        ],
      },
    },
  },
  'ngb-multi-select-form-smart': {
    content: 'Favorite colors',
    dumb: {
      component: Ngblock.MultiSelectFormComponent,
      inputs: {
        label: 'Favorite colors',
        value: ['blue'],
        options: [
          { label: 'Blue', value: 'blue' },
          { label: 'Green', value: 'green' },
          { label: 'Violet', value: 'violet' },
        ],
      },
    },
    smart: {
      component: Ngblock.MultiSelectFormSmartComponent,
      inputs: {
        label: 'Favorite colors',
        value: ['blue'],
        options: [
          { label: 'Blue', value: 'blue' },
          { label: 'Green', value: 'green' },
          { label: 'Violet', value: 'violet' },
        ],
      },
    },
  },
  'ngb-number-form-smart': {
    content: 'Quantity',
    dumb: {
      component: Ngblock.NumberFormComponent,
      inputs: { label: 'Quantity', value: 3, min: 0, max: 10, step: 1 },
    },
    smart: {
      component: Ngblock.NumberFormSmartComponent,
      inputs: { label: 'Quantity', value: 3, min: 0, max: 10, step: 1 },
    },
  },
  'ngb-otp-form-smart': {
    content: 'Verification code',
    dumb: {
      component: Ngblock.OtpFormComponent,
      inputs: { label: 'Verification code', value: '381204', length: 6 },
    },
    smart: {
      component: Ngblock.OtpFormSmartComponent,
      inputs: { label: 'Verification code', value: '381204', length: 6 },
    },
  },
  'ngb-password-form-smart': {
    content: 'Password',
    dumb: {
      component: Ngblock.PasswordFormComponent,
      inputs: { label: 'Password', value: '', placeholder: 'Enter a password' },
    },
    smart: {
      component: Ngblock.PasswordFormSmartComponent,
      inputs: { label: 'Password', value: '', placeholder: 'Enter a password' },
    },
  },
  'ngb-radio-group-form-smart': {
    content: 'Plan',
    dumb: {
      component: Ngblock.RadioGroupFormComponent,
      inputs: {
        label: 'Plan',
        name: 'plan',
        value: 'basic',
        options: [
          { label: 'Basic', value: 'basic' },
          { label: 'Pro', value: 'pro' },
        ],
      },
    },
    smart: {
      component: Ngblock.RadioGroupFormSmartComponent,
      inputs: {
        label: 'Plan',
        name: 'plan',
        value: 'basic',
        options: [
          { label: 'Basic', value: 'basic' },
          { label: 'Pro', value: 'pro' },
        ],
      },
    },
  },
  'ngb-rating-form-smart': {
    content: 'Product rating',
    dumb: {
      component: Ngblock.RatingFormComponent,
      inputs: { label: 'Product rating', value: 3, max: 5, disabled: false },
    },
    smart: {
      component: Ngblock.RatingFormSmartComponent,
      inputs: { label: 'Product rating', value: 3, max: 5, disabled: false },
    },
  },
  'ngb-select-button-form-smart': {
    content: 'Display',
    dumb: {
      component: Ngblock.SelectButtonFormComponent,
      inputs: {
        label: 'Display',
        options: [
          { label: 'List', value: 'list' },
          { label: 'Grid', value: 'grid' },
        ],
        value: 'grid',
      },
    },
    smart: {
      component: Ngblock.SelectButtonFormSmartComponent,
      inputs: {
        label: 'Display',
        options: [
          { label: 'List', value: 'list' },
          { label: 'Grid', value: 'grid' },
        ],
        value: 'grid',
      },
    },
  },
  'ngb-select-form-smart': {
    content: 'Country',
    dumb: {
      component: Ngblock.SelectFormComponent,
      inputs: {
        label: 'Country',
        value: 'ca',
        options: [
          { label: 'Canada', value: 'ca' },
          { label: 'France', value: 'fr' },
          { label: 'Japan', value: 'jp' },
        ],
      },
    },
    smart: {
      component: Ngblock.SelectFormSmartComponent,
      inputs: {
        label: 'Country',
        value: 'ca',
        options: [
          { label: 'Canada', value: 'ca' },
          { label: 'France', value: 'fr' },
          { label: 'Japan', value: 'jp' },
        ],
      },
    },
  },
  'ngb-slider-form-smart': {
    content: 'Volume',
    dumb: {
      component: Ngblock.SliderFormComponent,
      inputs: { label: 'Volume', value: 65, min: 0, max: 100, step: 5 },
    },
    smart: {
      component: Ngblock.SliderFormSmartComponent,
      inputs: { label: 'Volume', value: 65, min: 0, max: 100, step: 5 },
    },
  },
  'ngb-switch-form-smart': {
    content: 'Enable notifications',
    dumb: {
      component: Ngblock.SwitchFormComponent,
      inputs: { label: 'Enable notifications', checked: true, disabled: false },
    },
    smart: {
      component: Ngblock.SwitchFormSmartComponent,
      inputs: { label: 'Enable notifications', checked: true, disabled: false },
    },
  },
  'ngb-tags-form-smart': {
    content: 'Skills',
    dumb: {
      component: Ngblock.TagsFormComponent,
      inputs: { label: 'Skills', value: ['Angular', 'TypeScript'] },
    },
    smart: {
      component: Ngblock.TagsFormSmartComponent,
      inputs: { label: 'Skills', value: ['Angular', 'TypeScript'] },
    },
  },
  'ngb-text-field-form-smart': {
    content: 'Email address',
    dumb: {
      component: Ngblock.TextFieldFormComponent,
      inputs: {
        label: 'Email address',
        value: '',
        type: 'email',
        placeholder: 'you@example.com',
        disabled: false,
        required: false,
      },
    },
    smart: {
      component: Ngblock.TextFieldFormSmartComponent,
      inputs: {
        label: 'Email address',
        value: '',
        type: 'email',
        placeholder: 'you@example.com',
        disabled: false,
        required: false,
      },
    },
  },
  'ngb-textarea-form-smart': {
    content: 'Description',
    dumb: {
      component: Ngblock.TextareaFormComponent,
      inputs: {
        label: 'Description',
        value: '',
        rows: 4,
        placeholder: 'Tell us more...',
      },
    },
    smart: {
      component: Ngblock.TextareaFormSmartComponent,
      inputs: {
        label: 'Description',
        value: '',
        rows: 4,
        placeholder: 'Tell us more...',
      },
    },
  },
  'ngb-time-picker-form-smart': {
    content: 'Start time',
    dumb: {
      component: Ngblock.TimePickerFormComponent,
      inputs: { label: 'Start time', min: '09:00', max: '17:00' },
    },
    smart: {
      component: Ngblock.TimePickerFormSmartComponent,
      inputs: { label: 'Start time', min: '09:00', max: '17:00' },
    },
  },
  'ngb-card-layout-smart': {
    content: 'Manage your personal information.',
    dumb: {
      component: Ngblock.CardLayoutComponent,
      inputs: { title: 'Profile' },
    },
    smart: {
      component: Ngblock.CardLayoutSmartComponent,
      inputs: { title: 'Profile' },
    },
  },
  'ngb-container-layout-smart': {
    content: 'Centered responsive content container.',
    dumb: {
      component: Ngblock.ContainerLayoutComponent,
      inputs: { size: 'large' },
    },
    smart: {
      component: Ngblock.ContainerLayoutSmartComponent,
      inputs: { size: 'large' },
    },
  },
  'ngb-divider-layout-smart': {
    content: 'Preview Divider Layout',
    dumb: {
      component: Ngblock.DividerLayoutComponent,
      inputs: { orientation: 'horizontal' },
    },
    smart: {
      component: Ngblock.DividerLayoutSmartComponent,
      inputs: { orientation: 'horizontal' },
    },
  },
  'ngb-fieldset-layout-smart': {
    content: 'Preview Fieldset Layout',
    dumb: {
      component: Ngblock.FieldsetLayoutComponent,
      inputs: { legend: 'Contact information' },
    },
    smart: {
      component: Ngblock.FieldsetLayoutSmartComponent,
      inputs: { legend: 'Contact information' },
    },
  },
  'ngb-flex-layout-smart': {
    content: 'Preview Flex Layout',
    dumb: {
      component: Ngblock.FlexLayoutComponent,
      inputs: { direction: 'row', wrap: 'wrap', gap: '1rem', justify: 'start' },
    },
    smart: {
      component: Ngblock.FlexLayoutSmartComponent,
      inputs: { direction: 'row', wrap: 'wrap', gap: '1rem', justify: 'start' },
    },
  },
  'ngb-grid-layout-smart': {
    content: 'Preview Grid Layout',
    dumb: {
      component: Ngblock.GridLayoutComponent,
      inputs: { minItemWidth: '16rem', gap: '1rem' },
    },
    smart: {
      component: Ngblock.GridLayoutSmartComponent,
      inputs: { minItemWidth: '16rem', gap: '1rem' },
    },
  },
  'ngb-panel-layout-smart': {
    content: 'This panel can be expanded or collapsed.',
    dumb: {
      component: Ngblock.PanelLayoutComponent,
      inputs: { title: 'Project details', collapsible: true },
    },
    smart: {
      component: Ngblock.PanelLayoutSmartComponent,
      inputs: { title: 'Project details', collapsible: true },
    },
  },
  'ngb-scroll-area-layout-smart': {
    content: 'Preview Scroll Area Layout',
    dumb: { component: Ngblock.ScrollAreaLayoutComponent, inputs: {} },
    smart: { component: Ngblock.ScrollAreaLayoutSmartComponent, inputs: {} },
  },
  'ngb-splitter-layout-smart': {
    content: 'Preview Splitter Layout',
    dumb: {
      component: Ngblock.SplitterLayoutComponent,
      inputs: { orientation: 'horizontal', position: 50 },
    },
    smart: {
      component: Ngblock.SplitterLayoutSmartComponent,
      inputs: { orientation: 'horizontal', position: 50 },
    },
  },
  'ngb-stack-layout-smart': {
    content: 'First item      Second item      Third item',
    dumb: {
      component: Ngblock.StackLayoutComponent,
      inputs: { direction: 'vertical', gap: '1rem' },
    },
    smart: {
      component: Ngblock.StackLayoutSmartComponent,
      inputs: { direction: 'vertical', gap: '1rem' },
    },
  },
  'ngb-toolbar-layout-smart': {
    content: 'Document actions',
    dumb: {
      component: Ngblock.ToolbarLayoutComponent,
      inputs: { label: 'Document actions' },
    },
    smart: {
      component: Ngblock.ToolbarLayoutSmartComponent,
      inputs: { label: 'Document actions' },
    },
  },
  'ngb-accordion-menu-smart': {
    content: 'Preview Accordion Menu',
    dumb: {
      component: Ngblock.AccordionMenuComponent,
      inputs: {
        items: [
          {
            title: 'What is ngblock?',
            content: 'A standalone Angular component library.',
          },
          {
            title: 'Is it accessible?',
            content: 'Components use native elements and accessible semantics.',
          },
        ],
      },
    },
    smart: {
      component: Ngblock.AccordionMenuSmartComponent,
      inputs: {
        items: [
          {
            title: 'What is ngblock?',
            content: 'A standalone Angular component library.',
          },
          {
            title: 'Is it accessible?',
            content: 'Components use native elements and accessible semantics.',
          },
        ],
      },
    },
  },
  'ngb-breadcrumb-menu-smart': {
    content: 'Preview Breadcrumb Menu',
    dumb: {
      component: Ngblock.BreadcrumbMenuComponent,
      inputs: {
        items: [
          { label: 'Home', href: '/' },
          { label: 'Library', href: '/library' },
          { label: 'Components' },
        ],
      },
    },
    smart: {
      component: Ngblock.BreadcrumbMenuSmartComponent,
      inputs: {
        items: [
          { label: 'Home', href: '/' },
          { label: 'Library', href: '/library' },
          { label: 'Components' },
        ],
      },
    },
  },
  'ngb-command-menu-smart': {
    content: 'Preview Command Menu',
    dumb: {
      component: Ngblock.CommandMenuComponent,
      inputs: {
        items: [
          {
            label: 'Create project',
            description: 'Start a new workspace project',
          },
          { label: 'Open settings', description: 'Manage your preferences' },
          { label: 'Invite a teammate' },
        ],
      },
    },
    smart: {
      component: Ngblock.CommandMenuSmartComponent,
      inputs: {
        items: [
          {
            label: 'Create project',
            description: 'Start a new workspace project',
          },
          { label: 'Open settings', description: 'Manage your preferences' },
          { label: 'Invite a teammate' },
        ],
      },
    },
  },
  'ngb-context-menu-smart': {
    content: 'More actions',
    dumb: {
      component: Ngblock.ContextMenuComponent,
      inputs: {
        label: 'More actions',
        items: [{ label: 'Edit' }, { label: 'Duplicate' }, { label: 'Delete' }],
      },
    },
    smart: {
      component: Ngblock.ContextMenuSmartComponent,
      inputs: {
        label: 'More actions',
        items: [{ label: 'Edit' }, { label: 'Duplicate' }, { label: 'Delete' }],
      },
    },
  },
  'ngb-dropdown-menu-smart': {
    content: 'Actions',
    dumb: {
      component: Ngblock.DropdownMenuComponent,
      inputs: { label: 'Actions' },
    },
    smart: {
      component: Ngblock.DropdownMenuSmartComponent,
      inputs: { label: 'Actions' },
    },
  },
  'ngb-menubar-menu-smart': {
    content: 'Preview Menubar Menu',
    dumb: {
      component: Ngblock.MenubarMenuComponent,
      inputs: {
        items: [
          { label: 'Dashboard', href: '#' },
          { label: 'Projects', href: '#projects' },
          { label: 'Settings' },
        ],
      },
    },
    smart: {
      component: Ngblock.MenubarMenuSmartComponent,
      inputs: {
        items: [
          { label: 'Dashboard', href: '#' },
          { label: 'Projects', href: '#projects' },
          { label: 'Settings' },
        ],
      },
    },
  },
  'ngb-responsive-navigation-menu-smart': {
    content: 'Main navigation',
    dumb: {
      component: Ngblock.ResponsiveNavigationMenuComponent,
      inputs: {
        label: 'Main navigation',
        menuLabel: 'Menu',
        items: [
          { label: 'Components', href: '#components' },
          { label: 'Documentation', href: '#documentation' },
          { label: 'Examples', href: '#examples' },
        ],
      },
    },
    smart: {
      component: Ngblock.ResponsiveNavigationMenuSmartComponent,
      inputs: {
        label: 'Main navigation',
        menuLabel: 'Menu',
        items: [
          { label: 'Components', href: '#components' },
          { label: 'Documentation', href: '#documentation' },
          { label: 'Examples', href: '#examples' },
        ],
      },
    },
  },
  'ngb-steps-menu-smart': {
    content: 'Preview Steps Menu',
    dumb: {
      component: Ngblock.StepsMenuComponent,
      inputs: {
        activeIndex: 1,
        steps: [
          { label: 'Account', description: 'Create your account.' },
          { label: 'Profile', description: 'Add your details.' },
          { label: 'Complete' },
        ],
      },
    },
    smart: {
      component: Ngblock.StepsMenuSmartComponent,
      inputs: {
        activeIndex: 1,
        steps: [
          { label: 'Account', description: 'Create your account.' },
          { label: 'Profile', description: 'Add your details.' },
          { label: 'Complete' },
        ],
      },
    },
  },
  'ngb-tabs-menu-smart': {
    content: 'Preview Tabs Menu',
    dumb: {
      component: Ngblock.TabsMenuComponent,
      inputs: {
        tabs: [
          { id: 'overview', label: 'Overview', content: 'Overview content' },
          { id: 'details', label: 'Details', content: 'Details content' },
        ],
      },
    },
    smart: {
      component: Ngblock.TabsMenuSmartComponent,
      inputs: {
        tabs: [
          { id: 'overview', label: 'Overview', content: 'Overview content' },
          { id: 'details', label: 'Details', content: 'Details content' },
        ],
      },
    },
  },
  'ngb-alert-message-smart': {
    content: 'This is an informational message.',
    dumb: {
      component: Ngblock.AlertMessageComponent,
      inputs: { type: 'info' },
    },
    smart: {
      component: Ngblock.AlertMessageSmartComponent,
      inputs: { type: 'info' },
    },
  },
  'ngb-badge-message-smart': {
    content: 'New',
    dumb: {
      component: Ngblock.BadgeMessageComponent,
      inputs: { tone: 'neutral' },
    },
    smart: {
      component: Ngblock.BadgeMessageSmartComponent,
      inputs: { tone: 'neutral' },
    },
  },
  'ngb-chip-message-smart': {
    content: 'Design',
    dumb: {
      component: Ngblock.ChipMessageComponent,
      inputs: { label: 'Design', removable: true },
    },
    smart: {
      component: Ngblock.ChipMessageSmartComponent,
      inputs: { label: 'Design', removable: true },
    },
  },
  'ngb-progress-message-smart': {
    content: 'Upload progress',
    dumb: {
      component: Ngblock.ProgressMessageComponent,
      inputs: { value: 65, max: 100, label: 'Upload progress' },
    },
    smart: {
      component: Ngblock.ProgressMessageSmartComponent,
      inputs: { value: 65, max: 100, label: 'Upload progress' },
    },
  },
  'ngb-skeleton-message-smart': {
    content: 'Preview Skeleton Message',
    dumb: { component: Ngblock.SkeletonMessageComponent, inputs: { lines: 3 } },
    smart: {
      component: Ngblock.SkeletonMessageSmartComponent,
      inputs: { lines: 3 },
    },
  },
  'ngb-spinner-message-smart': {
    content: 'Loading results',
    dumb: {
      component: Ngblock.SpinnerMessageComponent,
      inputs: { label: 'Loading results' },
    },
    smart: {
      component: Ngblock.SpinnerMessageSmartComponent,
      inputs: { label: 'Loading results' },
    },
  },
  'ngb-toast-message-smart': {
    content: 'Your profile has been updated.',
    dumb: {
      component: Ngblock.ToastMessageComponent,
      inputs: { title: 'Changes saved', type: 'success', dismissible: true },
    },
    smart: {
      component: Ngblock.ToastMessageSmartComponent,
      inputs: { title: 'Changes saved', type: 'success', dismissible: true },
    },
  },
  'ngb-icon-smart': {
    content: 'Preview Icon',
    dumb: { component: Ngblock.IconComponent, inputs: { glyph: '★' } },
    smart: { component: Ngblock.IconSmartComponent, inputs: { glyph: '★' } },
  },
  'ngb-confirm-dialog-overlay-smart': {
    content: 'This action cannot be undone.',
    dumb: {
      component: Ngblock.ConfirmDialogOverlayComponent,
      inputs: {
        open: true,
        title: 'Delete project?',
        message: 'This action cannot be undone.',
        confirmLabel: 'Delete',
        cancelLabel: 'Keep project',
      },
    },
    smart: {
      component: Ngblock.ConfirmDialogOverlaySmartComponent,
      inputs: {
        open: true,
        title: 'Delete project?',
        message: 'This action cannot be undone.',
        confirmLabel: 'Delete',
        cancelLabel: 'Keep project',
      },
    },
  },
  'ngb-dialog-overlay-smart': {
    content: 'Dialog content goes here.',
    dumb: {
      component: Ngblock.DialogOverlayComponent,
      inputs: { open: true, title: 'Dialog title' },
    },
    smart: {
      component: Ngblock.DialogOverlaySmartComponent,
      inputs: { open: true, title: 'Dialog title' },
    },
  },
  'ngb-drawer-overlay-smart': {
    content: 'Drawer content',
    dumb: {
      component: Ngblock.DrawerOverlayComponent,
      inputs: { open: true, title: 'Settings', side: 'right' },
    },
    smart: {
      component: Ngblock.DrawerOverlaySmartComponent,
      inputs: { open: true, title: 'Settings', side: 'right' },
    },
  },
  'ngb-popover-overlay-smart': {
    content: 'Additional contextual information.',
    dumb: {
      component: Ngblock.PopoverOverlayComponent,
      inputs: { label: 'Details' },
    },
    smart: {
      component: Ngblock.PopoverOverlaySmartComponent,
      inputs: { label: 'Details' },
    },
  },
  'ngb-tooltip-overlay-smart': {
    content: 'Hover or focus me',
    dumb: {
      component: Ngblock.TooltipOverlayComponent,
      inputs: { text: 'Helpful hint' },
    },
    smart: {
      component: Ngblock.TooltipOverlaySmartComponent,
      inputs: { text: 'Helpful hint' },
    },
  },
};

export function getComponentPreview(
  selector: string,
  variant: PreviewVariant,
): ComponentPreview | null {
  const preview = componentPreviews[selector];
  return preview ? { ...preview[variant], content: preview.content } : null;
}
