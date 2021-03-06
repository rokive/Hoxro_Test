import { Component,
  Input,
  ElementRef,
  ViewChild,
  Renderer,
  forwardRef,
  OnInit, 
  EventEmitter,
  Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InlineEditComponent),
  multi: true
};

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
  styleUrls: ['./inline-edit.component.css']
})

export class InlineEditComponent implements ControlValueAccessor, OnInit {

  @ViewChild('inlineEditControl') inlineEditControl: ElementRef; 
  @Input() label: string = '';  
  @Input() type: string = 'text';
  @Input() required: boolean = false; 
  @Input() disabled: boolean = false; 
  private _value: string = ''; 
  private preValue: string = ''; 
  private editing: boolean = false; 
  public onChange: any = Function.prototype; 
  public onTouched: any = Function.prototype; 
  @Output() private updateText = new EventEmitter<string>();
  // Control Value Accessors for ngModel
  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  constructor(element: ElementRef, private _renderer: Renderer) {
  }

  // Required for ControlValueAccessor interface
  writeValue(value: any) {
    this._value = value;
  }

  // Required forControlValueAccessor interface
  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  // Required forControlValueAccessor interface
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  // Do stuff when the input element loses focus
  onBlur($event: Event) {
    this.editing = false;
    this.updateText.emit(this._value);
    console.log('test');
  }

  // Start the editting process for the input element
  edit(value) {
    if (this.disabled) {
      return;
    }

    this.preValue = value;
    this.editing = true;
    
  }

  ngOnInit() {
  }
}
