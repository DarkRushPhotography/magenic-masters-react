import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Page } from '@dark-rush-photography/website/types';
import { MetaService } from '@dark-rush-photography/website/data';

@Component({
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.scss'],
})
export class AdminEventsComponent implements OnInit {
  constructor(private router: Router, private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.addMetadataForPage$(Page.AdminEvents, this.router.url);
  }
}
