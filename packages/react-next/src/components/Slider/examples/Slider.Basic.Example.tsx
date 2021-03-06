import * as React from 'react';
import { Slider } from '@fluentui/react-next/lib/Slider';
import { IStackTokens, Stack, IStackStyles } from '@fluentui/react-next/lib/Stack';

const stackStyles: Partial<IStackStyles> = { root: { maxWidth: 300 } };

export interface ISliderBasicExampleState {
  value: number;
}

// tslint:disable:jsx-no-lambda
export class SliderBasicExample extends React.Component<{}, ISliderBasicExampleState> {
  public state: ISliderBasicExampleState = { value: 0 };

  public render(): JSX.Element {
    const stackTokens: IStackTokens = { childrenGap: 20 };

    return (
      <Stack tokens={stackTokens} styles={stackStyles}>
        <Slider />
        <Slider
          label="Snapping slider example"
          min={0}
          max={50}
          step={10}
          defaultValue={20}
          showValue={true}
          onChange={(value: number) => console.log(value)}
          snapToStep
        />
        <Slider label="Disabled example" min={50} max={500} step={50} defaultValue={300} showValue={true} disabled />
        <Slider
          label="Controlled example"
          max={10}
          value={this.state.value}
          onChange={(value: number) => this.setState({ value })}
          showValue={true}
        />
        <Slider
          label="Example with formatted value"
          max={100}
          ariaValueText={(value: number) => `${value} percent`}
          valueFormat={(value: number) => `${value}%`}
          showValue={true}
        />
        <Slider label="Origin from zero" min={-5} max={5} step={1} defaultValue={2} showValue originFromZero />
      </Stack>
    );
  }
}
