import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'ngb-avatar-data',
  templateUrl: './avatar.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarDataComponent {
  readonly name = input.required<string>();
  readonly src = input('');
  readonly initials = computed(() =>
    this.name()
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join(''),
  );
}
