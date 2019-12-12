import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {QuillModule} from "ngx-quill";
import {SpinnerComponent} from "./components/spinner/spinner.component";
import {SearchPipe} from "./pipe/search.pipe";

@NgModule({
  declarations: [SpinnerComponent, SearchPipe],
  imports: [HttpClientModule, QuillModule.forRoot()],
  exports: [HttpClientModule, QuillModule, SpinnerComponent,  SearchPipe]
})
export class SharedModule{

}
