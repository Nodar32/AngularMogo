import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {ServicePageComponent} from "./components/service-page/service-page.component";
import {BlogPageComponent} from "./components/blog-page/blog-page.component";
import {ClientsPageComponent} from "./components/clients-page/clients-page.component";
import {DesignPageComponent} from "./components/design-page/design-page.component";
import {GalleryPageComponent} from "./components/gallery-page/gallery-page.component";
import {TeamPageComponent} from "./components/team-page/team-page.component";
import {BlogsListComponent} from "./components/blog-page/blogs-list/blogs-list.component";
import {BlogIdComponent} from "./components/blog-page/blog-id/blog-id.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {PostsPageComponent} from "./components/posts-page/posts-page.component";
import {PostsListComponent} from "./components/posts-page/posts-list/posts-list.component";
import {PostIdComponent} from "./components/posts-page/post-id/post-id.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'about', component: AboutPageComponent},
      {path: 'service', component: ServicePageComponent},
      {path: 'blogs', component: BlogPageComponent, children: [
          {path: '', component: BlogsListComponent},
          {path: ':id', component: BlogIdComponent}
        ]},
      {path: 'clients', component: ClientsPageComponent},
      {path: 'design', component: DesignPageComponent},
      {path: 'gallery', component: GalleryPageComponent},
      {path: 'team', component: TeamPageComponent},
      {path: 'posts', component: BlogPageComponent, children: [
          {path: '', component: PostsListComponent},
          {path: ':id', component: PostIdComponent}
        ]},
    ]
  },
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
