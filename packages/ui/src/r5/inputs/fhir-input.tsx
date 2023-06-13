import { ReactElement } from "react";
import {
  FhirInputBoolean,
  FhirInputBooleanProps,
  FhirInputCode,
  FhirInputCodeProps,
  FhirInputCodeableConcept,
  FhirInputCodeableConceptProps,
  FhirInputCoding,
  FhirInputCodingProps,
  FhirInputDate,
  FhirInputDateProps,
  FhirInputDateTime,
  FhirInputDateTimeProps,
  FhirInputString,
  FhirInputStringProps,
} from "./input-types/index.js";

export function FhirInput<TRendererProps = any>(
  props: FhirInputProps<TRendererProps>
): ReactElement | null {
  switch (props.type) {
    case "boolean": {
      return <FhirInputBoolean {...props} />;
    }
    case "code": {
      return <FhirInputCode {...props} />;
    }
    case "Coding": {
      return <FhirInputCoding {...props} />;
    }
    case "CodeableConcept": {
      return <FhirInputCodeableConcept {...props} />;
    }
    case "date": {
      return <FhirInputDate {...props} />;
    }
    case "dateTime": {
      return <FhirInputDateTime {...props} />;
    }
    case "string": {
      return <FhirInputString {...props} />;
    }
    default: {
      throw new Error(`Unknown FhirInput type: ${(props as any).type}`);
    }
  }
}

export type FhirInputProps<TRendererProps = any> =
  | FhirInputBooleanProps<TRendererProps>
  | FhirInputCodeProps<TRendererProps>
  | FhirInputCodingProps<TRendererProps>
  | FhirInputCodeableConceptProps<TRendererProps>
  | FhirInputDateProps<TRendererProps>
  | FhirInputDateTimeProps<TRendererProps>
  | FhirInputStringProps<TRendererProps>;