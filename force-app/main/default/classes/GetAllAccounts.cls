public with sharing class GetAllAccounts {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [select id,Name from Account WITH SECURITY_ENFORCED ORDER BY Name ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Case> getCaseRecords(String Id){
        return [select CaseNumber from Case where AccountId = :Id WITH SECURITY_ENFORCED];
    }
}