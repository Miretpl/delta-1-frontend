import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  boards = [];
  constructor() { }

  ngOnInit(): void {
    this.boards = [ {name: 'Board 1', description: 'Description 1', lastUpdate: 1 },
                    {name: 'Board 2', description: 'Description 2', lastUpdate: 2  },
                    {name: 'Board 3', description: 'Description 3', lastUpdate: 3  },
                    {name: 'Board 4', description: 'Description 4', lastUpdate: 4  },
                    {name: 'Board 2', description: 'Description 2', lastUpdate: 2  },
                    {name: 'Board 3', description: 'Description 3', lastUpdate: 3  },
                    {name: 'Board 4', description: 'Description 4', lastUpdate: 4  },
                    {name: 'Board 2', description: 'Description 2', lastUpdate: 2  },
                    {name: 'Board 3', description: 'Description 3', lastUpdate: 3  },
                    {name: 'Board 4', description: 'Description 4', lastUpdate: 4  },
                    {name: 'Board 2', description: 'Description 2', lastUpdate: 2  },
                    {name: 'Board 3', description: 'Description 3', lastUpdate: 3  },
                    {name: 'Board 4', description: 'Description 4', lastUpdate: 4  },
                    {name: 'Board 5', description: 'Description 5', lastUpdate: 5  }
                  ]
  }

}
