import { engine as darkerEngine } from "libs/darker-engine";
import { Component, ComponentTypeMap, Entity } from "engine";

export const engine = () => {
	
	const _engine = darkerEngine<Entity, Component, ComponentTypeMap>();
	const get = () => _engine;
	
	return {
		get
	}
	
}