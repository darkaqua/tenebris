import React from 'react';
import {Icon, IconProps} from "shared/components";

export const LineIcon: React.FC<IconProps> = ({
	strokeWidth = 3,
	...props
}) => (
	<Icon {...props}>
		<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<line
				x1="19" y1="50" x2="83" y2="50"
				stroke="currentColor"
				strokeWidth={strokeWidth}
			/>
		</svg>
	
	</Icon>
);
