enum PaymentStatus {
	SUCCESS = 'success',
	FAILED = 'failed'
}

interface RequestData {
	sum: number
	from: number
	to: number
}

interface DataResponseSuccess {
	databaseId: number
	sum: number
	from: number
	to: number
}

interface DataResponseFailed {
	errorMessage: string
	errorCode: number
}

interface PaymentResponseSuccess {
	status: PaymentStatus.SUCCESS
	data: DataResponseSuccess
}

interface PaymentResponseFailed {
	status: PaymentStatus.FAILED
	data: DataResponseFailed
}

type Res = PaymentResponseFailed | PaymentResponseSuccess

function isResponseSuccess(response: Res): response is PaymentResponseSuccess {
	return response.status === PaymentStatus.SUCCESS
}

function getIdFromData(response: Res): number | never {
	if (isResponseSuccess(response)) {
		return response.data.databaseId
	} else {
		throw new Error(response.data.errorMessage + response.data.errorCode)
	}
}
