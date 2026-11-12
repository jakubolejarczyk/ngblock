import { Component } from '@angular/core';
import { NgblockShowcaseComponent } from './showcase/ngblock-showcase.component';

@Component({
  imports: [NgblockShowcaseComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
