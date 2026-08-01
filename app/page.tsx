import { AlertTriangle, Banknote, CarFront, ChevronRight, CircleDollarSign, Clock3, Landmark, Plus, Search, Warehouse } from "lucide-react";

const vehicles = [
  { stock: "YD-001", name: "Toyota Premio G Superior", year: 2018, status: "Available", cost: 14500000, price: 16900000, days: 24 },
  { stock: "YD-002", name: "Honda Vezel Z", year: 2020, status: "Reserved", cost: 17200000, price: 19800000, days: 12 },
  { stock: "YD-003", name: "Suzuki Wagon R Stingray", year: 2019, status: "Preparing", cost: 7350000, price: 8250000, days: 7 },
  { stock: "YD-004", name: "Toyota CH-R GT", year: 2017, status: "Available", cost: 16500000, price: 18750000, days: 61 },
];

const money = (value: number) => `LKR ${(value / 1000000).toFixed(1)}M`;

export default function Dashboard() {
  const invested = vehicles.reduce((sum, item) => sum + item.cost, 0);
  const expectedProfit = vehicles.reduce((sum, item) => sum + item.price - item.cost, 0);

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><span>Y</span> YardOS</div>
        <nav>
          {['Overview','Vehicles','Sales','Customers','Receivables','Payables','Cheques','Leasing','Yard spaces','Website'].map((item, index) => (
            <a className={index === 0 ? 'active' : ''} href="#" key={item}>{item}</a>
          ))}
        </nav>
        <div className="dealer"><strong>City Auto Traders</strong><small>Colombo showroom</small></div>
      </aside>

      <section className="content">
        <header>
          <div><p className="eyebrow">SATURDAY, 1 AUGUST</p><h1>Good afternoon, Affan.</h1><p>Here is what needs your attention today.</p></div>
          <button><Plus size={18}/> Add vehicle</button>
        </header>

        <div className="metrics">
          <Metric icon={<CarFront/>} label="Vehicles in stock" value="24" note="3 arriving this week" />
          <Metric icon={<CircleDollarSign/>} label="Capital in inventory" value={money(invested)} note="Across 24 vehicles" />
          <Metric icon={<Banknote/>} label="Money to collect" value="LKR 18.4M" note="LKR 4.5M overdue" danger />
          <Metric icon={<Landmark/>} label="Expected profit" value={money(expectedProfit)} note="Based on target prices" />
        </div>

        <div className="grid">
          <section className="panel attention">
            <div className="panelTitle"><div><p className="eyebrow">ACTION CENTRE</p><h2>Needs attention</h2></div><span>6 open</span></div>
            <Alert icon={<AlertTriangle/>} title="Leasing settlement overdue" text="LKR 4.5M from ABC Finance · Toyota Vezel" tag="3 days late" />
            <Alert icon={<Clock3/>} title="Two cheques due tomorrow" text="Total value LKR 2.1M" tag="Review" />
            <Alert icon={<Warehouse/>} title="Yard capacity warning" text="3 cars arriving, only 2 spaces available" tag="Resolve" />
          </section>

          <section className="panel cashflow">
            <div className="panelTitle"><div><p className="eyebrow">NEXT 7 DAYS</p><h2>Cash flow</h2></div><a href="#">View calendar</a></div>
            <div className="flowRow"><span>Expected in</span><strong>LKR 8.7M</strong></div>
            <div className="bar"><i style={{width:'76%'}}/></div>
            <div className="flowRow"><span>Committed out</span><strong>LKR 6.2M</strong></div>
            <div className="bar muted"><i style={{width:'54%'}}/></div>
            <div className="net"><span>Projected net position</span><strong>+ LKR 2.5M</strong></div>
          </section>
        </div>

        <section className="panel inventory">
          <div className="panelTitle"><div><p className="eyebrow">INVENTORY</p><h2>Recent vehicles</h2></div><div className="search"><Search size={16}/> Search stock</div></div>
          <div className="table">
            <div className="tr th"><span>Vehicle</span><span>Status</span><span>Investment</span><span>Target price</span><span>Age</span><span></span></div>
            {vehicles.map(vehicle => <div className="tr" key={vehicle.stock}>
              <span><strong>{vehicle.name}</strong><small>{vehicle.stock} · {vehicle.year}</small></span>
              <span><em className={`status ${vehicle.status.toLowerCase()}`}>{vehicle.status}</em></span>
              <span>{money(vehicle.cost)}</span><span>{money(vehicle.price)}</span>
              <span className={vehicle.days > 60 ? 'late' : ''}>{vehicle.days} days</span><span><ChevronRight size={18}/></span>
            </div>)}
          </div>
        </section>
      </section>
    </main>
  );
}

function Metric({icon,label,value,note,danger=false}:{icon:React.ReactNode,label:string,value:string,note:string,danger?:boolean}) {
  return <article className="metric"><div className="metricIcon">{icon}</div><p>{label}</p><h3>{value}</h3><small className={danger ? 'late' : ''}>{note}</small></article>
}

function Alert({icon,title,text,tag}:{icon:React.ReactNode,title:string,text:string,tag:string}) {
  return <div className="alert"><div className="alertIcon">{icon}</div><div><strong>{title}</strong><p>{text}</p></div><button className="tag">{tag}</button></div>
}
