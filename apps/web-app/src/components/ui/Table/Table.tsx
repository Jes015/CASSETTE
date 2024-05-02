import { BaseComponentProps } from "@/models/component.model"
import { TableBody } from "./components/TableBody"
import { TableColumn } from "./components/TableColumn"
import { TableHeader } from "./components/TableHeader"
import { TableRow } from "./components/TableRow"

export const Table = ({ ...props }: BaseComponentProps) => {
    return (
        <table
            {...props}
        />
    )
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
Table.Column = TableColumn