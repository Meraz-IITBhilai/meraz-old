import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeroComponent } from './hero/hero.component';
import { TimerComponent } from './timer/timer.component';
import { FooterComponent } from './footer/footer.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { CoreModule } from './core/core.module';
import { ParticlesModule } from 'angular-particle';
import { EventComponent } from './pages/event/event.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TopBarComponent,
		HeroComponent,
		TimerComponent,
		FooterComponent,
		EventListComponent,
		EventComponent,
		SidebarComponent,
		RegisterFormComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		HttpClientModule,
		AppRoutingModule,
		ParticlesModule,
		NoopAnimationsModule,
		MatButtonModule,
		MatInputModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
