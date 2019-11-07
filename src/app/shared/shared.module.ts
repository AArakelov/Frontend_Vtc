import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';

@NgModule({
  imports: [
    QuillModule.forRoot(),
    HttpClientModule],
  exports: [HttpClientModule]
})
export  class SharedModule {

}
