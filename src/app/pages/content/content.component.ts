import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private Id:string | null =""
  contentPhoto:string=""
  contentTitle:string=""
  contentDescription:string=""

  constructor(private route:ActivatedRoute)
   { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.Id = (value.get("id"))
    )
  }
  setValuesToComponents(id:string | null){
    const result =dataFake.filter(article => article.id ==id)[0]

this.contentTitle = result.title
this.contentDescription = result.description
this.contentPhoto = result.photo

  }

}
