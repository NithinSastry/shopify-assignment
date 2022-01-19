import Tickets from '../data';
import { setTickets } from './utils/service-broker';
import TicketModel from './model/index';
import TicketWindowView from './views/TicketWindowView';

import './styles/style.css';

//set the initial ticket data in the local storage
console.log(Tickets);
setTickets(Tickets);

//initialise the model
const ticketModel = new TicketModel();

//intialise main view
const ticketWindowView = new TicketWindowView(Tickets).getMarkup();
