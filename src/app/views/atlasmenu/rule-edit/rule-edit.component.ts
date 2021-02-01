import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RuleService } from "../../../services/masters/rule.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rule-edit',
  templateUrl: './rule-edit.component.html',
  styleUrls: ['./rule-edit.component.scss']
})
export class RuleEditComponent implements OnInit {
  debugger;
  id: number;
  ruleId : string;
  btnname: string;
  isDisabled :boolean= false;
  constructor(private route: ActivatedRoute,private router:Router,private fb: FormBuilder,private services: RuleService) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.ruleId = params['ruleId'];
      
  });
   }
   ruleform = this.fb.group({})

  ngOnInit() {
    debugger;
    this.ruleform.addControl("ruleId", new FormControl('', [Validators.required]));
    this.ruleform.controls['ruleId'].setValue(this.ruleId); 

  }

}
