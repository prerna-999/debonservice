// import { Container, Row, Col } from "react-bootstrap";

// const items = [
//   { t: "Built around your business", d: "Support shaped by your size, industry and stage of growth." },
//   { t: "Visible decisions", d: "Know what was done, what is pending and what needs your input." },
//   { t: "Compliance first", d: "Deadlines tracked early, with records ready when you need them." },
//   { t: "Easy to scale", d: "Start with one service and add more as your business grows." },
// ];

// export default function Why() {
//   return (
//     <section className="corporate-section corporate-section-dark">
//       <Container>
//         <div className="corporate-section-label">04 / Why choose Debon Services</div>
//         <h2 className="corporate-section-title">
//           Closer to the work <em>Closer to the outcome</em>
//         </h2>
//         <Row className="corporate-why-list">
//           {items.map((w) => (
//             <Col md={6} key={w.t}>
//               <div className="corporate-why-card">
//                 <h3>{w.t}</h3>
//                 <p>{w.d}</p>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// }


import { Container, Row, Col } from "react-bootstrap";

const items = [
  { t: "Options That Fit", d: "Choose from different types of workspaces." },
  { t: "Flexible Stays", d: "Rent for the period that suits you." },
  { t: "Work Your Way", d: "Find a space that matches how you work." },
  { t: "Room for What's Next", d: "Choose a space that can meet your changing needs." },
];

export default function Why() {
  return (
    <section className="corporate-section corporate-section-dark">
      <Container>
        <div className="corporate-section-label">Why Choose Debonaire Flexible Workspaces</div>
        <h2 className="corporate-section-title">The Right Space. Less Hassle.</h2>
        <p className="corporate-lead-text">
          Whether you need a desk for a day or a space for your business, we make it easier to find an option that works for you.
        </p>
        <Row className="corporate-why-list">
          {items.map((w) => (
            <Col md={6} key={w.t}>
              <div className="corporate-why-card">
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}