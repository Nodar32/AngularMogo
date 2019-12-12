import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ClientsPageComponent } from './components/clients-page/clients-page.component';
import { DesignPageComponent } from './components/design-page/design-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClientComponent } from './components/clients-page/client/client.component';
import { BlogComponent } from './components/blog-page/blog/blog.component';
import { BlogsListComponent } from './components/blog-page/blogs-list/blogs-list.component';
import { BlogIdComponent } from './components/blog-page/blog-id/blog-id.component';
import { CommentComponent } from './components/blog-page/comment/comment.component';
import { ImgItemComponent } from './components/gallery-page/img-item/img-item.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import { PostsListComponent } from './components/posts-page/posts-list/posts-list.component';
import { PostIdComponent } from './components/posts-page/post-id/post-id.component';
import { PostComponent } from './components/posts-page/post/post.component';
import {SharedModule} from "./shared/shared.module";
import { MemberComponent } from './components/team-page/member/member.component';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    AboutPageComponent,
    ServicePageComponent,
    TeamPageComponent,
    GalleryPageComponent,
    ClientsPageComponent,
    DesignPageComponent,
    BlogPageComponent,
    FooterComponent,
    ClientComponent,
    BlogComponent,
    BlogsListComponent,
    BlogIdComponent,
    CommentComponent,
    ImgItemComponent,
    PostsPageComponent,
    PostsListComponent,
    PostIdComponent,
    PostComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
