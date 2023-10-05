class Ticket{
    destination;
    price;
    status;

    constructor(destination,price,status){
        this.destination=destination,
        this.price=price,
        this.status=status
    }
}

function sortTickets(ticketsInfo,sortingCriterion){

    const tickets=[];

    ticketsInfo.forEach(ticketInfo => {
        let data = ticketInfo.split("|");
        let city = data[0];
        let price = parseFloat(data[1]);
        let status = data[2];
        const ticket = new Ticket(city,price,status);
        tickets.push(ticket);
    });

    if(sortingCriterion === "destination"){
        console.log(tickets.sort(function(a,b){
            if(a.destination.toLowerCase()>b.destination.toLowerCase()){
                return 1 };
            if(a.destination.toLowerCase()<b.destination.toLowerCase()){
                return -1 };
            return 0;
        }));
    }
    else if(sortingCriterion=== "price"){
        console.log(tickets.sort((a,b)=>a.price-b.price));
    }
    else{
        console.log(tickets.sort(function(a,b){
            if(a.status.toLowerCase()>b.status.toLowerCase()){
                return 1 };
            if(a.status.toLowerCase()<b.status.toLowerCase()){
                return -1 };
            return 0;
        }));
    }
}

sortTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status')