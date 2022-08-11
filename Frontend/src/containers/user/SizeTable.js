import { Table } from "../../components";

const SizeTable = ({ filterSize, onFilterSizeChange }) => {
	return (
		<div
			style={{
				marginTop: "16px",
				marginRight: "16px",
				marginBottom: "20px",
			}}
		>
			<Table.Base>
				<Table.Body>
					<Table.Row>
						<Table.Data
							onClick={() => onFilterSizeChange("S")}
							hoverable
							active={filterSize.includes("S")}
						>
							S
						</Table.Data>

						<Table.Data
							onClick={() => onFilterSizeChange("M")}
							hoverable
							active={filterSize.includes("M")}
						>
							M
						</Table.Data>

						<Table.Data
							onClick={() => onFilterSizeChange("L")}
							hoverable
							active={filterSize.includes("L")}
						>
							L
						</Table.Data>

						<Table.Data
							onClick={() => onFilterSizeChange("XL")}
							hoverable
							active={filterSize.includes("XL")}
						>
							XL
						</Table.Data>
					</Table.Row>

					<Table.Row>
						<Table.Data
							onClick={() => onFilterSizeChange("35")}
							hoverable
							active={filterSize.includes("35")}
						>
							35
						</Table.Data>
						<Table.Data
							onClick={() => onFilterSizeChange("36")}
							hoverable
							active={filterSize.includes("36")}
						>
							36
						</Table.Data>
						<Table.Data
							onClick={() => onFilterSizeChange("37")}
							hoverable
							active={filterSize.includes("37")}
						>
							37
						</Table.Data>
						<Table.Data
							onClick={() => onFilterSizeChange("38")}
							hoverable
							active={filterSize.includes("38")}
						>
							38
						</Table.Data>
					</Table.Row>

					<Table.Row>
						<Table.Data
							onClick={() => onFilterSizeChange("39")}
							hoverable
							active={filterSize.includes("39")}
						>
							39
						</Table.Data>
						<Table.Data
							onClick={() => onFilterSizeChange("40")}
							hoverable
							active={filterSize.includes("40")}
						>
							40
						</Table.Data>
						<Table.Data
							onClick={() => onFilterSizeChange("41")}
							hoverable
							active={filterSize.includes("41")}
						>
							41
						</Table.Data>
						<Table.Data
							onClick={() => onFilterSizeChange("42")}
							hoverable
							active={filterSize.includes("42")}
						>
							42
						</Table.Data>
					</Table.Row>

					<Table.Row>
						<Table.Data
							onClick={() => onFilterSizeChange("43")}
							hoverable
							active={filterSize.includes("43")}
						>
							43
						</Table.Data>
						<Table.Data
							onClick={() => onFilterSizeChange("44")}
							hoverable
							active={filterSize.includes("44")}
						>
							44
						</Table.Data>
						<Table.Data
							onClick={() => onFilterSizeChange("45")}
							hoverable
							active={filterSize.includes("45")}
						>
							45
						</Table.Data>
						<Table.Data
							onClick={() => onFilterSizeChange("46")}
							hoverable
							active={filterSize.includes("46")}
						>
							46
						</Table.Data>
					</Table.Row>
				</Table.Body>
			</Table.Base>
		</div>
	);
};

export default SizeTable;
