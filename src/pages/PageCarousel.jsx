import Carousel from "../components/Carousel";

export default function CarouselPage() {
  return (
    <>
      <h1>Carousel Component Requirements</h1>

      <h2>Requirements:</h2>
      <ol>
        <li>
          The carousel component should be able to accept any HTML element as
          its slides.
        </li>
        <li>
          The slides should transition smoothly from one to another, with each
          slide displaying for a duration of 1 second.
        </li>
        <li>
          The carousel should include two buttons: `Previous` and `Next`. When
          clicked, these buttons should move the carousel to the previous and
          next slides, respectively. Additionally, the timer for slide
          transitions should reset upon button click.
        </li>
        <li>
          Implement a hover functionality, where hovering over the carousel
          pauses the slide transitions until the mouse cursor leaves the
          carousel area.
        </li>
      </ol>
      <Carousel>
        <div
          style={{ width: "200px", height: "200px", background: "lightred" }}
        >
          0 Apple
        </div>
        <div
          style={{ width: "200px", height: "200px", background: "lightgreen" }}
        >
          1 Ball
        </div>
        <div style={{ width: "200px", height: "200px", background: "yellow" }}>
          2 Cat
        </div>
        <div
          style={{ width: "200px", height: "200px", background: "lightgray" }}
        >
          3 Donkey
        </div>
        <div
          style={{ width: "200px", height: "200px", background: "lightpink" }}
        >
          4 Elephant
        </div>
        <div
          style={{ width: "200px", height: "200px", background: "lightred" }}
        >
          5 Giraffe
        </div>
        <div
          style={{ width: "200px", height: "200px", background: "lightred" }}
        >
          6 Hippy
        </div>
        <div
          style={{ width: "200px", height: "200px", background: "lightred" }}
        >
          7 Ice
        </div>
      </Carousel>
    </>
  );
}
