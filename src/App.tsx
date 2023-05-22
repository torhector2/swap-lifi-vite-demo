import { LiFiWidget, WidgetConfig } from "@lifi/widget";

const widgetConfig: WidgetConfig = {
  integrator: "Your dApp/company name",
};

function App() {
  return (
    // Comment LifiWidget to make the app work again
    <LiFiWidget integrator="Your dApp/company name" config={widgetConfig} />
    // <div>This works</div>
  );
}

export default App;
