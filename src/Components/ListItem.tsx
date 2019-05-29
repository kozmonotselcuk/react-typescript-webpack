// Global Imports
import * as React from "react";
import styled from "styled-components";

// Local Imports
import { IListItem } from "@Interfaces";

const ListWrapper = styled.div`
	display:flex;
	justify-content: space-between;
	padding: 4px;
`;

export class ListItem extends React.PureComponent<IListItem, {}> {
	public render(): JSX.Element {
		const { ID, parentID, Phone, City, Name } = this.props;
		return (
			<ListWrapper>

				<div>{Name}</div>
				<div>{City}</div>
				<div>{Phone}</div>

			</ListWrapper>
		);
	}
}
