
public with sharing class Accountpicks {
    @AuraEnabled(cacheable=true)
    public static List<Account> activeAccounts(){
        try {
            List<Account> stats= [SELECT Id,Name, Industry, Active__c FROM Account WHERE Active__c='Yes' WITH SECURITY_ENFORCED];
            System.debug(stats);
            return [SELECT Id,Name, Industry, Active__c FROM Account WHERE Active__c='Yes' WITH SECURITY_ENFORCED];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> inactiveAccounts(){
        try {
            List<Account> stats= [SELECT Id,Name, Industry, Active__c FROM Account WHERE Active__c='No' WITH SECURITY_ENFORCED];
            System.debug(stats);
            return [SELECT Id,Name, Industry, Active__c FROM Account WHERE Active__c='No' WITH SECURITY_ENFORCED];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}