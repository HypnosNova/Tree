/// <reference types="chai" />
import ITreeNode, { ITreeNodeData } from "./interfaces/ITreeNode";
import IVisitor from "./interfaces/IVisitor";
type Constructor<T = Object> = new (...a: any[]) => T;
export declare const mixin: <TBase extends Constructor<Object>>(Base?: TBase) => {
    new (...a: any[]): {
        parent: ITreeNode | null;
        children: Array<ITreeNode | null>;
        addChild(node: ITreeNodeData): this;
        depth(): number;
        findLeaves(): ITreeNodeData[];
        findRoot(): ITreeNodeData;
        hasAncestor(ancestor: ITreeNodeData): boolean;
        removeChild(child: ITreeNodeData): this;
        toArray(): ITreeNodeData[];
        traverse(visitor: IVisitor, rest?: any): this;
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
        should: Chai.Assertion;
    };
    mixin: any;
    addChild(node: ITreeNodeData, child: ITreeNodeData): ITreeNodeData;
    depth(node: ITreeNodeData): number;
    findLeaves(node: ITreeNodeData): ITreeNodeData[];
    findRoot(node: ITreeNodeData): ITreeNodeData;
    hasAncestor(node: ITreeNodeData, ancestor: ITreeNodeData): boolean;
    removeChild(node: ITreeNodeData, child: ITreeNodeData): ITreeNodeData;
    toArray(node: ITreeNodeData): ITreeNodeData[];
    traverse(node: ITreeNodeData, visitor: IVisitor, rest?: any): ITreeNodeData;
} & TBase;
declare const _default: {
    new (...a: any[]): {
        parent: ITreeNode | null;
        children: (ITreeNode | null)[];
        addChild(node: ITreeNodeData): any;
        depth(): number;
        findLeaves(): ITreeNodeData[];
        findRoot(): ITreeNodeData;
        hasAncestor(ancestor: ITreeNodeData): boolean;
        removeChild(child: ITreeNodeData): any;
        toArray(): ITreeNodeData[];
        traverse(visitor: IVisitor, rest?: any): any;
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
        should: Chai.Assertion;
    };
    mixin: <TBase extends Constructor<Object>>(Base?: TBase) => {
        new (...a: any[]): {
            parent: ITreeNode | null;
            children: (ITreeNode | null)[];
            addChild(node: ITreeNodeData): any;
            depth(): number;
            findLeaves(): ITreeNodeData[];
            findRoot(): ITreeNodeData;
            hasAncestor(ancestor: ITreeNodeData): boolean;
            removeChild(child: ITreeNodeData): any;
            toArray(): ITreeNodeData[];
            traverse(visitor: IVisitor, rest?: any): any;
            constructor: Function;
            toString(): string;
            toLocaleString(): string;
            valueOf(): Object;
            hasOwnProperty(v: PropertyKey): boolean;
            isPrototypeOf(v: Object): boolean;
            propertyIsEnumerable(v: PropertyKey): boolean;
            should: Chai.Assertion;
        };
        mixin: any;
        addChild(node: ITreeNodeData, child: ITreeNodeData): ITreeNodeData;
        depth(node: ITreeNodeData): number;
        findLeaves(node: ITreeNodeData): ITreeNodeData[];
        findRoot(node: ITreeNodeData): ITreeNodeData;
        hasAncestor(node: ITreeNodeData, ancestor: ITreeNodeData): boolean;
        removeChild(node: ITreeNodeData, child: ITreeNodeData): ITreeNodeData;
        toArray(node: ITreeNodeData): ITreeNodeData[];
        traverse(node: ITreeNodeData, visitor: IVisitor, rest?: any): ITreeNodeData;
    } & TBase;
    addChild(node: ITreeNodeData, child: ITreeNodeData): ITreeNodeData;
    depth(node: ITreeNodeData): number;
    findLeaves(node: ITreeNodeData): ITreeNodeData[];
    findRoot(node: ITreeNodeData): ITreeNodeData;
    hasAncestor(node: ITreeNodeData, ancestor: ITreeNodeData): boolean;
    removeChild(node: ITreeNodeData, child: ITreeNodeData): ITreeNodeData;
    toArray(node: ITreeNodeData): ITreeNodeData[];
    traverse(node: ITreeNodeData, visitor: IVisitor, rest?: any): ITreeNodeData;
} & ObjectConstructor;
export default _default;
