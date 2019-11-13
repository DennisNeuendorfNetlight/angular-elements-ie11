import { BrowserModule } from "@angular/platform-browser";
import {
  NgModule,
  Type,
  Injector,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";

import { AppComponent } from "./app.component";
import { SimpleListComponent } from "./simple-list/simple-list.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [AppComponent, SimpleListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent, SimpleListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const elements = ([] = [
      [SimpleListComponent, "simple-list"],
      [AppComponent, "app-root"]
    ]);

    for (const [component, name] of elements) {
      const el = createCustomElement(component as Type<any>, {
        injector: this.injector
      });
      customElements.define(name as string, el);
    }
  }
}
