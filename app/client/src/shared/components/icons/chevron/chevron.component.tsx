import React from 'react';
import {Icon, IconProps} from "shared/components";

export const ChevronIcon: React.FC<IconProps> = ({
	strokeWidth = 3,
	...props
}) => (
	<Icon {...props}>
		<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M49.5 81L16.158 35.25L82.842 35.25L49.5 81Z"
				fill="currentColor"
			/>
		</svg>
	</Icon>
);
