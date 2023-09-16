import React from 'react';
import {Icon, IconProps} from "shared/components";

export const EntityIcon: React.FC<IconProps> = ({
	strokeWidth = 3,
	...props
}) => (
	<Icon {...props}>
		<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M14 29.4286L49.5 47.7143M14 29.4286L49.5 10L85 29.4286M14 29.4286V71.7143C14 71.7143 35.6364 82.859 49.5 90M49.5 47.7143L85 29.4286M49.5 47.7143C49.5 47.7143 49.5 73.4864 49.5 90M85 29.4286V71.7143C85 71.7143 63.3636 82.859 49.5 90"
				stroke="currentColor"
				strokeWidth={strokeWidth}
			/>
		</svg>
	</Icon>
);
