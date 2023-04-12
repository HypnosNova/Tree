import { IBinaryTreeNode } from "./interfaces/IBinaryTreeNode";
import { IVisitor } from "./interfaces/IVisitor";
import { TreeNode } from "./TreeNode";

let tmpNode: null | IBinaryTreeNode;

export type IComparer = (currentNode: IBinaryTreeNode, child: IBinaryTreeNode) => boolean;

export abstract class AbstractBinaryTreeNode extends TreeNode implements IBinaryTreeNode {
	public children: Array<IBinaryTreeNode | null> = [null, null];
	public parent: IBinaryTreeNode | null = null;
	private comparer: IComparer;

	public constructor(comparer: IComparer) {
		super();

		this.comparer = comparer;
	}

	public removeChild(node: IBinaryTreeNode): this {
		if (this.children.includes(node)) {
			this.children[this.children.indexOf(node)] = null;
			node.parent = null;
		}

		return this;
	}

	public traverseInOrder(visitor: IVisitor, rest: any): this {
		tmpNode = this.children[0];
		visitor.enter?.(this, rest);
		if (tmpNode) {
			tmpNode.traverseInOrder(visitor, rest);
		}
		visitor.visit?.(this, rest);
		tmpNode = this.children[1];
		if (tmpNode) {
			tmpNode.traverseInOrder(visitor, rest);
		}
		visitor.leave?.(this, rest);

		return this;
	}

	public traversePostOrder(visitor: IVisitor, rest: any): this {
		tmpNode = this.children[0];
		visitor.enter?.(this, rest);
		if (tmpNode) {
			tmpNode.traversePostOrder(visitor, rest);
		}
		tmpNode = this.children[1];
		if (tmpNode) {
			tmpNode.traversePostOrder(visitor, rest);
		}
		visitor.visit?.(this, rest);
		visitor.leave?.(this, rest);

		return this;
	}

	public traversePreOrder(visitor: IVisitor, rest: any): this {
		tmpNode = this.children[0];
		visitor.enter?.(this, rest);
		visitor.visit?.(this, rest);
		if (tmpNode) {
			tmpNode.traversePreOrder(visitor, rest);
		}
		tmpNode = this.children[1];
		if (tmpNode) {
			tmpNode.traversePreOrder(visitor, rest);
		}
		visitor.leave?.(this, rest);

		return this;
	}

	public addChild(node: IBinaryTreeNode): this {
		if (this.compare(node)) {
			if (this.children[1]) {
				(this.children[1] as IBinaryTreeNode).addChild(node);
			} else {
				if (this.hasAncestor(node)) {
					throw new Error("The node added is one of the ancestors of current one.");
				}
				this.children[1] = node;
				node.parent = this;
			}
		} else {
			if (this.children[0]) {
				(this.children[0] as IBinaryTreeNode).addChild(node);
			} else {
				if (this.hasAncestor(node)) {
					throw new Error("The node added is one of the ancestors of current one.");
				}
				this.children[0] = node;
				node.parent = this;
			}
		}

		return this;
	}

	/**
	 * 规定左孩子的对比为false，右孩子的对比为true
	 * @param nodeAdded
	 */
	public compare(nodeAdded: IBinaryTreeNode): boolean {
		return this.comparer(this, nodeAdded);
	}

	public get left(): IBinaryTreeNode | null {
		return this.children[0];
	}

	public set left(node: IBinaryTreeNode | null) {
		tmpNode = this.children[0];
		if (tmpNode) {
			this.removeChild(tmpNode);
		}
		this.children[0] = node;

		if (node) {
			node.parent = this;
		}
	}

	public get right(): IBinaryTreeNode | null {
		return this.children[1];
	}

	public set right(node: IBinaryTreeNode | null) {
		tmpNode = this.children[1];
		if (tmpNode) {
			this.removeChild(tmpNode);
		}
		this.children[1] = node;

		if (node) {
			node.parent = this;
		}
	}
}
