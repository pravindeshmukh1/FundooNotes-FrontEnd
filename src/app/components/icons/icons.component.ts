import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  @Input() archivedNote: any;
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  @Output() color: EventEmitter<any> = new EventEmitter();
  @Output() archive: EventEmitter<any> = new EventEmitter();
  @Output() unarchive: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() deletePermanent: EventEmitter<any> = new EventEmitter();
  @Output() restorePermanent: EventEmitter<any> = new EventEmitter();
  @Output() setReminder: EventEmitter<any> = new EventEmitter();
  @Output() label: EventEmitter<any> = new EventEmitter();
  @Output() collaborator: EventEmitter<any> = new EventEmitter();

  dateTimeRange: Date;
  min: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  colors: Array<any> = [
    { code: '#FFFFFF', name: 'White' },
    { code: '#F28B82', name: 'Red' },
    { code: '#F7BC04', name: 'Orange' },
    { code: '#FCF474', name: 'Yellow' },
    { code: '#b7f8dd', name: 'Green' },
    { code: '#A7FFEB', name: 'Teal' },
    { code: '#CBF0F8', name: 'Blue' },
    { code: '#800080', name: 'Lime' },
    { code: '#FF99FF', name: 'Purple' },
    { code: '#D3D3D3', name: 'Gray' },
    { code: '#FFCC99', name: 'Brown' },
    { code: '#FFB6C1', name: 'Pink' },
  ];

  setColor(color: any) {
    this.color.emit(color);
  }
  archiveNote() {
    this.archive.emit();
  }
  unArchiveNote() {
    this.unarchive.emit();
  }
  deleteNote() {
    this.delete.emit();
  }
  deleteNotePermanent() {
    this.deletePermanent.emit();
  }
  restoreNote() {
    this.restorePermanent.emit();
  }
  callReminder(dateTimeRange) {
    this.setReminder.emit(dateTimeRange);
    this.trigger.closeMenu();
  }
  openLabel(input: any) {
    this.label.emit(input);
  }
  openCollaborator() {
    this.collaborator.emit();
  }
}
