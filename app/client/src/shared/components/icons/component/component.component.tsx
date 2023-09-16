import React from 'react';
import {Icon, IconProps} from "shared/components";

export const ComponentIcon: React.FC<IconProps> = ({
	strokeWidth = 3,
	...props
}) => (
	<Icon {...props}>
		<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M52.9694 17.4511L70.7169 17.0668L70.3006 41.3733L70.2483 44.4247H73.3001C75.3185 44.4247 77.6114 43.7612 79.4507 43.229C79.5652 43.1959 79.678 43.1632 79.7889 43.1313C81.9298 42.5146 83.6734 42.0448 85.1391 42.0172C86.4418 41.9926 87.0945 42.3148 87.5869 42.9739C88.2497 43.8613 89 45.8715 89 50.1772C89 54.9377 88.247 57.3671 87.4761 58.5513C86.8683 59.4849 86.1412 59.8263 84.9693 59.8705C83.5718 59.9233 81.876 59.5195 79.7533 58.9363C79.5823 58.8893 79.4062 58.8403 79.2257 58.7901C77.4455 58.2951 75.2343 57.6803 73.3001 57.6803H70.2461L70.3006 60.7338L70.7159 84H11V17.0667L28.4996 17.4513C28.4404 17.9428 28.3729 18.4594 28.3017 19.0046C28.2514 19.3887 28.1994 19.7871 28.1471 20.2007C27.8761 22.3433 27.6092 24.8531 27.8699 27.2099C28.1364 29.6193 28.9909 32.2004 31.2439 34.1178C33.4583 36.0024 36.5502 36.8391 40.4152 36.8391C44.641 36.8391 47.9557 36.0335 50.3097 34.1999C52.7693 32.2841 53.678 29.6486 53.9078 27.1555C54.1288 24.7587 53.7498 22.2136 53.4008 20.0904C53.3521 19.7942 53.3041 19.5066 53.2575 19.2272C53.1522 18.5953 53.0538 18.0052 52.9694 17.4511Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
			/>
		</svg>
	</Icon>
);
