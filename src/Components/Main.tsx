// Global imports
import * as React from "react";
import { createGlobalStyle } from "styled-components";

// Local imports
import { Container, ListItem } from "@Components";
import { IListItem, IMainProps, IMainState } from "@Interfaces";

export const Wrapper = createGlobalStyle`
	*,*:before,*:after {
		box-sizing: border-box;
		padding:0;
		margin:0;
	}
  body {
		background-color:whitesmoke;
		font-family: 'Roboto', sans-serif;
		font-size: 1em;
	}
`;

export class Main extends React.Component<IMainProps, IMainState> {

	constructor(props: IMainProps) {
		super(props);
		this.state = {
			items: [],
		};
	}

	public componentWillMount(): void {
		fetch("https://gist.githubusercontent.com/burakcan/ca77e8fc11a1455cc1962ad7318b8fbc/raw/b446a09888882df7273f17d2ff7ebf4820de4152/dataset.json")
			.then((response) => response.json())
			.then((data: IListItem[]) =>
				this.setState({
					items: data,
				}),
			);
	}

	public render(): JSX.Element {
		return (
			<React.Fragment>
				<Wrapper />
				<Container>
					{this.state.items.map((item: IListItem, index: number) => <ListItem key={index} {...item} />)}
				</Container>
			</React.Fragment>
		);
	}
}
