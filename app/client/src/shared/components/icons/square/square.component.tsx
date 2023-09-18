import React from 'react';
import {Icon, IconProps} from "shared/components";

export const SquareIcon: React.FC<IconProps> = ({
	strokeWidth = 3,
	...props
}) => (
	<Icon {...props}>
		<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect
				x="22" y="22" width="58" height="58" rx="5"
				stroke="currentColor"
				strokeWidth={strokeWidth}
			/>
		</svg>
	</Icon>
);
