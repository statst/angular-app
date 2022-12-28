import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message: string = 'Hello Welcome to Lineup'
  welcomeFromService:string= ''
  name: string = ''

  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { 

  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
 

  handleSuccessfullResponse(response){
    this.welcomeFromService = response.message;
  }

  handleErrorResponse(error){
    this.welcomeFromService = error.error.message;
  }

}
