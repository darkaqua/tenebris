import React from 'react';
import {Icon, IconProps} from "shared/components";

export const SystemIcon: React.FC<IconProps> = ({
	strokeWidth = 3,
	...props
}) => (
	<Icon {...props}>
		<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M23.75 29.4286V50.5714M23.75 29.4286L41.5 19.7143M23.75 29.4286L41.5 38.5714M94.75 29.4286V50.5714M94.75 29.4286L77 38.5714M94.75 29.4286L77 19.7143M59.25 90V68.8571M59.25 90L77 80.8571M59.25 90L41.5 80.8571V59.7143M59.25 68.8571L77 59.7143M59.25 68.8571L41.5 59.7143M23.75 50.5714L41.5 59.7143M23.75 50.5714L6 60.2857M23.75 50.5714L41.5 60M94.75 50.5714V71.7143L77 80.8571M94.75 50.5714L77 59.7143M77 38.5714V59.7143M77 38.5714L59.25 29.1429M77 59.7143V80.8571M77 59.7143L59.25 50.5714M41.5 19.7143L59.25 10L77 19.7143M41.5 19.7143L59.25 29.1429M41.5 38.5714L59.25 29.1429M41.5 38.5714V59.7143M59.25 29.1429L77 19.7143M59.25 29.1429V50.5714M41.5 59.7143L59.25 50.5714M6 60.2857V81.4286L23.75 90.5714M6 60.2857L23.75 69.4286M23.75 69.4286L41.5 60M23.75 69.4286V90.5714M41.5 60V81.4286L23.75 90.5714"
				stroke="currentColor"
				strokeWidth={strokeWidth}
			/>
		</svg>
	</Icon>
);