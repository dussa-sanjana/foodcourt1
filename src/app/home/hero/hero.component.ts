import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  menu:any[]=[
    {dish:'beverages', pic:'https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/180129c1695477008026Mask%20group%20%289%29.png', colour:'pink'},
    {dish:'continental', pic:'https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/391869c1695476685208Mask%20group%20%287%29.png',colour:''},
    {dish:'chinese', pic:'https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/312941c1695476749107Mask%20group%20%281%29.png',colour:' #0b1625'},
    {dish:'thai', pic:'https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/136060c1695476851596Mask%20group%20%284%29.png',colour:' #0b1625'},
    {dish:'bakers', pic:'https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/822321c1695476952817Mask%20group%20%288%29.png',colour:'pink'},
    {dish:'north indian', pic:'https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/847739c1695476889752Mask%20group%20%285%29.png',colour:' #0b1625'},
    {dish:'south indian', pic:'https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/271985c1695476977747Mask%20group%20%2810%29.png',colour:' #0b1625'},
    {dish:'other', pic:'https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/893100c1695476822383Mask%20group%20%2812%29.png',colour:' #0b1625'},
  ]
  bites:any[]=[
    {pic:'https://isthara.com/assets/common/item-empty-icon.svg',dish:'Storm Goli Soda', loc:"Yummpy's Ameerpet",price:'Rs:40'},
    {pic:'https://isthara.com/assets/common/item-empty-icon.svg',dish:'pizza', loc:"Yummpy's Ameerpet",price:'Rs:100'},
    {pic:'https://isthara.com/assets/common/item-empty-icon.svg',dish:'pizza', loc:"Yummpy's Ameerpet",price:'Rs:100'},
    {pic:'https://isthara.com/assets/common/item-empty-icon.svg',dish:'pizza', loc:"Yummpy's Ameerpet",price:'Rs:100'},
    {pic:'https://isthara.com/assets/common/item-empty-icon.svg',dish:'pizza', loc:"Yummpy's Ameerpet",price:'Rs:100'}
  ]
  spot:any[]=[
    {pic:'https://istharaprod.blob.core.windows.net/isthara-prod/food-court/Egg%20Maggi%20-%20Wet.png?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D',dish:'Egg-Maggie',loc:"Yummpy's Ameerpet",price:'Rs-40'},
    {pic:'https://istharaprod.blob.core.windows.net/isthara-prod/food-court/VENDOR%20MENU%20IMAGES.png?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D',dish:'Isthara Water Bottle',loc:'Isthara',price:'Rs-5000'},
    {pic:'https://istharaprod.blob.core.windows.net/isthara-prod/food-court/Tea.png?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D', dish:'Tea',loc:'Sri Raghavendra Hotel',price:'Rs-20'},
    {pic:'https://istharaprod.blob.core.windows.net/isthara-prod/food-court/Specail%20Chicken%20Shawarma%20copy%20(2).png?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D',dish:'Special Chicken SHawarma',loc:'The Shawarma COmpany', price:'Rs-45'},
    {pic:'https://istharaprod.blob.core.windows.net/isthara-prod/food-court/Chicken%20Shawarma%20Salad.png?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D',dish:'Chicken Shawarma Salad',loc:'The Shawarma Company', price:'Rs-60'}
  ]
  res:any[]=[
    {pic:'https://istharaprod.blob.core.windows.net/isthara-prod/food-court/Group%201707480633.png?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D',name:'Isthara',rate:'4.3',cuisine:['bevarages']},
    {pic:'https://istharaprod.blob.core.windows.net/isthara-prod/food-court/five%20star.png?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D',name:'Five star',rate:'5.0',cuisine:['bakers','south Indian','Continental','Thai']},
    {pic:'https://istharaprod.blob.core.windows.net/isthara-prod/food-court/The%20shawarma%20co%20logo.jpg?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D',name:'The Shawarma Company Ameerpet',rate:'4.0',cuisine:['Continental','North Indian']},
    {pic:'https://istharaprod.blob.core.windows.net/isthara-prod/food-court/srh.jpg?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D',name:'Sri Raghavendra Hotels-Ameerpet',rate:'4.7',cuisine:['Beverages','South Indian','Chinese','Bakers','Others']},
    {pic:'https://istharaprod.blob.core.windows.net/isthara-prod/food-court/yummpys.png?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D',name:"Yummpy's Ameerpet",rate:'2.5',cuisine:['Chinese','South Indian','Beverages','Others']},
    {pic:'https://istharaprod.blob.core.windows.net/isthara-prod/food-court/WhatsApp%20Image%202023-12-22%20at%2012.54.43%20PM.jpeg?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D',name:'GMB Restaurant',rate:'5.0',cuisine:['SOuth Indian']},
    {pic:'https://isthara.com/assets/common/resturant-empty-icon.svg',name:'Seasonal Juice Bar',rate:'0.0',cuisine:[]}
  ]
  api=inject(ApiService)
  data:any;
  abc(){
  this.api.getData().subscribe(
    (res:any)=>{
      this.data=res;
      console.log(res)
    }
  )
  }

  
}
