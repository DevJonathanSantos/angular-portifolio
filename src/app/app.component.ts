import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Portifolio';

  categorias = [
    {
      nome: 'Linguagens',
      itens: ['.NET(C#)', 'TypeScript', 'JavaScript', 'Python'],
    },
    {
      nome: 'Bancos de dados',
      itens: ['SQLServer', 'MySQL', 'PostgresSQL', 'MongoDB', 'Redis'],
    },
    {
      nome: 'Front-end',
      itens: ["AngularJS","Angular","ReactJS","NextJS","HTML","CSS","Bootstrap"],
    },
    {
      nome: 'Serviços AWS',
      itens: ["S3","ECS","EC2","SNS","SQS","SES","Codecommit","CloudWatch"],
    },
    {
      nome: 'Outros',
      itens: ["RabbitMQ","Worker SoapUI","Postman","Git","Bitbucket","Visual Studio","VSCode"],
    },
  ];
}
