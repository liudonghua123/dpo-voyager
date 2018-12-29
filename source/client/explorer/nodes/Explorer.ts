/**
 * 3D Foundation Project
 * Copyright 2018 Smithsonian Institution
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as THREE from "three";

import Node, { IComponentEvent } from "@ff/graph/Node";

import Scene from "@ff/scene/components/Scene";

import Explorer from "../components/Explorer";
import HomeGrid from "../components/HomeGrid";
import View from "../components/View";
import Renderer from "../components/Renderer";
import Reader from "../components/Reader";
import Model from "../components/Model";

////////////////////////////////////////////////////////////////////////////////

const _vec3 = new THREE.Vector3();
const _box3 = new THREE.Box3();

export default class ExplorerNode extends Node
{
    static readonly type: string = "Explorer";

    explorer: Explorer;
    scene: Scene;
    grid: HomeGrid;
    view: View;

    protected boundingBox = new THREE.Box3();

    create()
    {
        this.name = "Explorer";

        this.explorer = this.createComponent(Explorer);
        this.scene = this.createComponent(Scene);
        this.grid = this.createComponent(HomeGrid);
        this.view = this.createComponent(View);

        this.createComponent(Renderer);
        this.createComponent(Reader);

        // create grid node
        // const gridNode = this.graph.createNode(Node, "Grid");
        // const gridTransform = gridNode.createComponent(Transform);
        // gridNode.createComponent(Grid);
        // this.hierarchy.addChild(gridTransform);

        // scene background
        this.scene.scene.background = new THREE.TextureLoader().load("images/bg-gradient-blue.jpg");

        this.system.components.on(Model, this.onModelComponent, this);

    }

    dispose()
    {
        super.dispose();
        this.system.components.off(Model, this.onModelComponent, this);
    }

    protected onModelComponent(event: IComponentEvent<Model>)
    {
        if (event.add) {
            event.component.on(Model.updateEvent, this.onModelUpdate, this);
        }
        else if (event.remove) {
            event.component.off(Model.updateEvent, this.onModelUpdate, this);
        }
    }

    protected onModelUpdate()
    {
        const box = this.boundingBox.makeEmpty();
        const models = this.graph.components.getArray(Model);

        for (let model of models) {
            _box3.copy(model.getBoundingBox());
            _box3.applyMatrix4(model.object3D.matrixWorld);
            box.union(_box3);
        }

        box.getSize(_vec3);
        const maxLength = Math.max(_vec3.x, _vec3.y, _vec3.z);

        const { maxOffset, offset } = this.view.ins;
        maxOffset.value[2] = maxLength * 2;
        maxOffset.set();
        offset.value[2] = maxLength * 1.5;
        offset.set();

        let gridSize = this.grid.ins.size.value;
        while (gridSize < maxLength) {
            gridSize *= 2;
        }

        this.grid.ins.size.setValue(gridSize);
    }
}