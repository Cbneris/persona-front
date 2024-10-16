import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  personaForm: FormGroup;
  personas: any[] = [];

  constructor(private fb: FormBuilder, private personaService: PersonaService) {
    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.getPersonas();
  }

  onSubmit() {
    if (this.personaForm.valid) {
      const persona = this.personaForm.value;
      this.personaService.addPersona(persona).subscribe(() => {
        this.getPersonas();
      });
      this.personaForm.reset();
    }
  }

  getPersonas() {
    this.personaService.getPersonas().subscribe((data: any[]) => {
      this.personas = data;
    });
  }
}
