import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  contactForm!: FormGroup;//"!" significa que nos comprometemos a que nunca sea null

  constructor(private fromBuilder:FormBuilder){
    this.contactForm = this.fromBuilder.group({
      email:['', [Validators.required,Validators.email]],
      mensaje: ['', [Validators.required,Validators.minLength(10)]]
    });
  }

  hasErrors(field: string, typeError:string){
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

  enviar(event: Event){
    event.preventDefault();
    console.log('Enviado')
  }

  ngOnInit(): void {
      
  }
}
