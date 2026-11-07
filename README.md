# FoodDistro

A web app for community organisations that distribute meals. It keeps food stock, volunteers, distribution centres and scheduled events in one place, so nobody has to piece the plan together from separate lists.

Built for CSE326 (CA2) at Lovely Professional University. No framework, no build step.



## The problem

Running a community meal drive means keeping track of four things at once:

- **Demand:** how many meals each area needs
- **Places:** where food is distributed, and when
- **People:** which volunteers cover which distribution
- **Stock:** how much food is left

FoodDistro puts all four on one screen.

## Features

**Dashboard**
Distribution events, food supply and volunteer assignments on a single page.

**Food Supply**
- Add food items to a running list
- Mark items as used as food goes out
- Remove entries you no longer need

**Volunteers**
- Register volunteers with a name and contact
- Assign each volunteer to a distribution event

**Distribution Centres**
- Add centres with a name and address
- Remove centres from the list

**Distribution Events**
- Pick a centre, then set a date and time
- Mark an event completed when it ends
- Remove events from the list

## Tech stack

| Layer | Used |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript |
| Navigation | Hash-based routing with a sidebar |

## Getting started

```bash
git clone https://github.com/<your-username>/FoodDistro.git
cd FoodDistro
```

Open `index.html` in a browser. For a local server, use the VS Code Live Server extension or run:

```bash
python -m http.server 5500
```

Then visit `http://127.0.0.1:5500`.

## Project structure

```
FoodDistro/
├── index.html
├── css/
├── js/
└── screenshots/
```

## Usage

1. Add your distribution centres.
2. Add the food you have in stock.
3. Register volunteers.
4. Schedule an event: choose a centre, a date and a time.
5. Assign volunteers to the event.
6. Mark the event completed afterwards and update food usage.
7. Check the Dashboard for the full picture.

## Author

**Lord Commander**
Lovely Professional University

## License

MIT. See `LICENSE` for details.

