import { Callout } from "@tremor/react";

export const CalloutCard = () => (
  <div className="space-y-6">
    <div>
      <h3 className="font-semibold text-text-color">Employees opinions:</h3>
    </div>
    <Callout title="Sales Performance" color="red">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Callout>
    <Callout title="Sales Performance" color="cyan">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Callout>
    <Callout title="Sales Performance" color="green">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Callout>
  </div>
);
