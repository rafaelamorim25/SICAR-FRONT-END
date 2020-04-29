import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { RecebimentosReportService } from '../shared/recebimentosreport.service';
import { Intervalo, RecebimentosReport } from '../shared/recebimentosreport.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lancamentos-report',
  templateUrl: './lancamentos-report.component.html',
  styleUrls: ['./lancamentos-report.component.css']
})
export class LancamentosReportComponent implements OnInit {

  relatorio: RecebimentosReport;
  intervaloForm: FormGroup;

  constructor(
    private service: RecebimentosReportService,
    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit() {
    this.relatorio = new RecebimentosReport(0.00);
    this.intervaloForm = this.formBuilder.group({
      inicio: ['', Validators.required],
      fim: ['', Validators.required]
  });
  }

  get f() { return this.intervaloForm.controls; }

  onSubmit() {
    this.service.getRelatorio(new Intervalo(this.f.inicio.value, this.f.fim.value))
    .subscribe(
      (relatorio) => {
        console.log(relatorio)
        this.relatorio = relatorio
      },
      () => alert('Erro ao buscar')
    );
}

}
