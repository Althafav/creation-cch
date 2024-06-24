const KontentDelivery = require("@kentico/kontent-delivery");

import { About } from "../models/about";
import { Bannerstats } from "../models/bannerstats";
import { Button } from "../models/button";
import { Clients } from "../models/clients";
import { Clientspage } from "../models/clientspage";
import { Event } from "../models/event";
import { Footer } from "../models/footer";
import { Footeritem } from "../models/footeritem";
import { Footerrevamp } from "../models/footerrevamp";
import { Home } from "../models/home";
import { Homeadvertise } from "../models/homeadvertise";
import { Homebanner } from "../models/homebanner";
import { Homebannertabs } from "../models/homebannertabs";
import { Homeprojects } from "../models/homeprojects";
import { Homerevamp } from "../models/homerevamp";
import { Menu } from "../models/menu";
import { Menuitem } from "../models/menuitem";
import { Menuitemrevamp } from "../models/menuitemrevamp";
import { Menurevamp } from "../models/menurevamp";
import { OurServicesItem } from "../models/our_services_item";
import { Portfolioitems } from "../models/portfolioitems";
import { Projectspage } from "../models/projectspage";
import { Services } from "../models/services";
import { Servicespage } from "../models/servicespage";
import { TestModel2 } from "../models/test_model2";
import { Testhomerevamp } from "../models/testhomerevamp";
import { Testmodel } from "../models/testmodel";
import { Testmymodel } from "../models/testmymodel";

export const TypeResolver = [
  new KontentDelivery.TypeResolver("Menu", (rawData: any) => new Menu()),
  new KontentDelivery.TypeResolver("Menuitem", (rawData: any) => new Menuitem()),
  new KontentDelivery.TypeResolver("Home", (rawData: any) => new Home()),
  new KontentDelivery.TypeResolver("Homebanner", (rawData: any) => new Homebanner()),
  new KontentDelivery.TypeResolver("Bannerstats", (rawData: any) => new Bannerstats()),
  new KontentDelivery.TypeResolver("About", (rawData: any) => new About()),
  new KontentDelivery.TypeResolver("Services", (rawData: any) => new Services()),
  new KontentDelivery.TypeResolver("Event", (rawData: any) => new Event()),
  new KontentDelivery.TypeResolver("Clients", (rawData: any) => new Clients()),
  new KontentDelivery.TypeResolver("Footer", (rawData: any) => new Footer()),
  new KontentDelivery.TypeResolver("Footeritem", (rawData: any) => new Footeritem()),
  new KontentDelivery.TypeResolver("Homerevamp", (rawData: any) => new Homerevamp()),
  new KontentDelivery.TypeResolver("Homeadvertise", (rawData: any) => new Homeadvertise()),
  new KontentDelivery.TypeResolver("Homebannertabs", (rawData: any) => new Homebannertabs()),
  new KontentDelivery.TypeResolver("Homeprojects", (rawData: any) => new Homeprojects()),
  new KontentDelivery.TypeResolver("Servicespage", (rawData: any) => new Servicespage()),
  new KontentDelivery.TypeResolver("Projectspage", (rawData: any) => new Projectspage()),
  new KontentDelivery.TypeResolver("Clientspage", (rawData: any) => new Clientspage()),
  new KontentDelivery.TypeResolver("Button", (rawData: any) => new Button()),
  new KontentDelivery.TypeResolver("Testmodel", (rawData: any) => new Testmodel()),
  new KontentDelivery.TypeResolver("Testmodel2", (rawData: any) => new TestModel2()),
  new KontentDelivery.TypeResolver("Testmymodel", (rawData: any) => new Testmymodel()),
  new KontentDelivery.TypeResolver("Testhomerevamp", (rawData: any) => new Testhomerevamp()),
  new KontentDelivery.TypeResolver("OurServicesItem", (rawData: any) => new OurServicesItem()),
  new KontentDelivery.TypeResolver("Portfolioitems", (rawData: any) => new Portfolioitems()),
  new KontentDelivery.TypeResolver("Footerrevamp", (rawData: any) => new Footerrevamp()),
  new KontentDelivery.TypeResolver("Menurevamp", (rawData: any) => new Menurevamp()),
  new KontentDelivery.TypeResolver("Menuitemrevamp", (rawData: any) => new Menuitemrevamp()),


  
];
