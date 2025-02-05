import { Component, Input, OnInit } from '@angular/core';
import { IconData } from '../../interfaces/icon-data';
import { CommonModule } from '@angular/common';
import { DeviconComponent } from '../devicon/devicon.component';

@Component({
  selector: 'app-devicon-container',
  templateUrl: './devicon-container.component.html',
  styleUrls: ['./devicon-container.component.css'],
  standalone: true,
  imports: [CommonModule, DeviconComponent]
})
export class DeviconContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(this.IconSize === "small") // tamaño icono
    {
      this.gapSize = "gap-small"; // Espacio pequeño entre iconos 
    }
  }

  @Input()
  ShowText : boolean = false; // Indica si se muestra el texto de icono o no

  @Input()
  IconSize : string = "big"; // en caso de ser grande y esta por defecto

  gapSize : string = "gap-big";

  @Input()
  Icons: IconData[] = [];

  IconsList: { [key: string]: string } = {
    "Csharp": "devicon-csharp-plain",
    "Java": "devicon-java-plain",
    "Python": "devicon-python-plain",
    "SqlServer": "devicon-microsoftsqlserver-plain",
    "MySql": "devicon-mysql-plain",
    "PostgreSql": "devicon-postgresql-plain",
    "HTML": "devicon-html5-plain",
    "Css": "devicon-css3-plain",
    "Bootstrap": "devicon-bootstrap-plain",
    "Angular": "devicon-angularjs-plain",
    ".Net Core" : "devicon-dotnetcore-plain",
    "Unity" : "devicon-unity-original",
    "OpenTk" : "devicon-opengl-plain",
    "Tomcat" : "devicon-tomcat-line",
    "GitHub" : "devicon-github-original",
    "Postman" : "devicon-postman-plain",
    "Swagger" : "devicon-swagger-plain",
    "Azure" : "devicon-azuresqldatabase-plain",
    "TypeScript" : "devicon-typescript-plain",
    "Jira" : "devicon-jira-plain",
    "Slack" : "devicon-slack-plain",
    "JavaScript" : "devicon-javascript-plain",
    "Jupyter" : "devicon-jupyter-plain",
    "Flask" : "devicon-flask-original",
    "MongoDB" : "devicon-mongodb-plain",
    "LinkedIn" : "devicon-linkedin-plain",
    "Matlab" : "devicon-matlab-plain",
    "Pycharm" : "devicon-pycharm-plain"
  };

}
