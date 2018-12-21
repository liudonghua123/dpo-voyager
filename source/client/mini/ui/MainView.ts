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

import CustomElement, { customElement } from "@ff/ui/CustomElement";

import Application, { IApplicationProps } from "../Application";

import ContentView from "../../explorer/ui/ContentView";

import "./styles.scss";

////////////////////////////////////////////////////////////////////////////////

@customElement("voyager-explorer")
export default class MainView extends CustomElement
{
    readonly application: Application;

    constructor(application?: Application)
    {
        super();

        if (application) {
            this.application = application;
        }
        else {
            const props: IApplicationProps = {
                item: this.getAttribute("item"),
                presentation: this.getAttribute("presentation"),
                template: this.getAttribute("template"),
                model: this.getAttribute("model"),
                geometry: this.getAttribute("geometry"),
                texture: this.getAttribute("texture")
            };

            this.application = new Application(props, false);
        }
    }

    protected firstConnected()
    {
        const system = this.application.system;
        new ContentView(system).appendTo(this);
    }
}