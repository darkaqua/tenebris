import React from 'react';
import {Icon, IconProps} from "shared/components";

export const CheckIcon: React.FC<IconProps> = ({
	strokeWidth = 3,
	...props
}) => (
	<Icon {...props}>
		<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M14 46.7895C14 46.7895 20.8525 52.9737 25.2131 58.5395C29.5738 64.1053 35.8033 74 35.8033 74L90 27"
				stroke="currentColor"
				strokeWidth={strokeWidth}
			/>
		</svg>
	</Icon>
);
